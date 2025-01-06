import { createReadStream, promises as fsPromises } from 'fs';
import { join, resolve, extname } from 'path';
import { NextResponse } from 'next/server';

// Video files mapping
const videos = {
  1: 'test.mp4',
  2: 'video2.mp4',
  3: 'video3.mp4',
};

// Path to the private videos directory
const videoBasePath = resolve(process.cwd(), 'private-videos');

// Rate limiting map (basic implementation)
const rateLimitMap = new Map();

export async function GET(request, { params }) {
  try {
    // 1. Validate and destructure params
    const { id } = await params;

    if (!id || isNaN(id)) {
      return new NextResponse("Invalid video ID", { status: 400 });
    }

    // 2. Rate Limiting (prevent abuse)
    const ip = request.headers.get('x-forwarded-for') || 'localhost';
    const now = Date.now();
    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, { count: 1, time: now });
    } else {
      const userData = rateLimitMap.get(ip);
      if (now - userData.time < 15 * 60 * 1000) { // 15-minute window
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

    // 3. Get the video filename and validate it
    const videoFile = videos[id];
    if (!videoFile) {
      return new NextResponse("Video not found", { status: 404 });
    }

    // 4. Build a secure file path and validate it
    const videoPath = resolve(videoBasePath, videoFile);

    // Prevent directory traversal attacks
    if (!videoPath.startsWith(videoBasePath)) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    // Ensure file extension is valid
    if (!['.mp4'].includes(extname(videoFile).toLowerCase())) {
      return new NextResponse("Invalid file type", { status: 415 });
    }

    // 5. Check if the file exists (async version)
    let stat;
    try {
      stat = await fsPromises.stat(videoPath);
    } catch (err) {
      return new NextResponse("File not found", { status: 404 });
    }

    const fileSize = stat.size;
    const range = request.headers.get('range');

    // 6. Handle range requests for partial downloads
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      // Validate range
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
          'Content-Security-Policy': "default-src 'self';",
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        },
      });
    }

    // 7. Full file download
    const file = createReadStream(videoPath);
    return new NextResponse(file, {
      headers: {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      },
    });
  } catch (err) {
    console.error("Server error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
