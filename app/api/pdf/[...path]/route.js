import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(req, context) {
  const params = await context.params; // Dynamic route parameters
  const pathSegments = params?.path;

  if (!pathSegments || pathSegments.length === 0) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
  }

  // Build the file path based on the URL
  const filePath = path.join(process.cwd(), 'pdfs', ...pathSegments);

  try {
    // Check if the file exists
    const fileContent = await fs.readFile(filePath);

    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${pathSegments[pathSegments.length - 1]}"`,
      },
    });
  } catch (error) {
    console.error('Error serving file:', error.message);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
