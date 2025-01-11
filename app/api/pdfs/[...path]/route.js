import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(req, context) {
  const params = context.params;
  const pathSegments = params?.path || [];

  console.log('Requested path segments:', pathSegments);

  if (pathSegments.length === 0) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
  }

  // Always remove 'pdf' from the path if it exists
  const cleanedPathSegments = pathSegments.filter(segment => segment !== 'pdf');

  // Build the file path based on the cleaned URL
  const filePath = path.join(process.cwd(), 'pdfs', ...cleanedPathSegments);

  console.log('Constructed file path:', filePath);

  try {
    // Check if the file exists
    await fs.access(filePath);
    console.log('File exists at path:', filePath);

    const fileContent = await fs.readFile(filePath);

    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${cleanedPathSegments[cleanedPathSegments.length - 1]}"`,
      },
    });
  } catch (error) {
    console.error('Error serving file:', error.message);
    console.log('File does not exist at path:', filePath);
    return NextResponse.json({ error: 'File not found', path: filePath }, { status: 404 });
  }
}

