import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const { country } = req.query;

  if (!country) {
    res.status(400).json({ error: 'Country parameter is required' });
    return;
  }

  const baseFolder = path.join(process.cwd(), 'pdfs', country);

  try {
    const [newFiles, oldFiles] = await Promise.all([
      getFilesFromFolder(baseFolder),
      getFilesFromFolder(path.join(baseFolder, 'old')),
    ]);

    const releases = [
      ...newFiles.map((file, index) => ({
        id: `new-${index + 1}`,
        title: `New Release ${index + 1}`,
        date: `2023-06-${String(index + 1).padStart(2, '0')}`,
        content: `This is a new press release.`,
        pdfFile: `${country}/${file}`,
      })),
      ...oldFiles.map((file, index) => ({
        id: `old-${index + 1}`,
        title: `Old Release ${index + 1}`,
        date: `2022-01-${String(index + 1).padStart(2, '0')}`,
        content: `This is an old press release.`,
        pdfFile: `${country}/old/${file}`,
      })),
    ];

    res.status(200).json(releases);
  } catch (error) {
    console.error('Error fetching press releases:', error.message);
    res.status(500).json({ error: 'Failed to fetch press releases' });
  }
}

async function getFilesFromFolder(folderPath) {
  try {
    return await fs.readdir(folderPath);
  } catch {
    return [];
  }
}

