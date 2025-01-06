import { createReadStream, promises as fsPromises } from 'fs';
import { join, resolve, extname } from 'path';
import { NextResponse } from 'next/server';

// Video files mapping
const videos = {
  1: 'test.mp4',
  2: 'test.mp4',
  3: 'test.mp4',
};

// Path to the private videos directory
const videoBasePath = resolve(process.cwd(), 'private-videos');

// Rate limiting map (basic implementation)
const rateLimitMap = new Map();

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!id || isNaN(id)) {
      return new NextResponse("Invalid video ID", { status: 400 });
    }

    const ip = request.headers.get('x-forwarded-for') || 'localhost';
    const now = Date.now();
    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, { count: 1, time: now });
    } else {
      const userData = rateLimitMap.get(ip);
      if (now - userData.time < 15 * 60 * 1000) {
        if (userData.count >= 100) {
          return new NextResponse("Too many requests", { status: 429 });
        }
        userData.count++;
      } else {
        userData.count = 1;
        userData.time = now;
      }
      rateLimitMap.set(ip, userData);
    }

    const videoFile = videos[id];
    if (!videoFile) {
      return new NextResponse("Video not found", { status: 404 });
    }

    const videoPath = resolve(videoBasePath, videoFile);

    if (!videoPath.startsWith(videoBasePath)) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    if (!['.mp4'].includes(extname(videoFile).toLowerCase())) {
      return new NextResponse("Invalid file type", { status: 415 });
    }

    let stat;
    try {
      stat = await fsPromises.stat(videoPath);
    } catch (err) {
      return new NextResponse("File not found", { status: 404 });
    }

    const fileSize = stat.size;
    const range = request.headers.get('range');

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      if (isNaN(start) || isNaN(end) || start >= fileSize || end >= fileSize || start > end) {
        return new NextResponse("Invalid range", { status: 416 });
      }

      const chunkSize = end - start + 1;
      const file = createReadStream(videoPath, { start, end });

      return new NextResponse(file, {
        status: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize,
          'Content-Type': 'video/mp4',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }

    const file = createReadStream(videoPath);
    return new NextResponse(file, {
      headers: {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (err) {
    console.error("Server error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}