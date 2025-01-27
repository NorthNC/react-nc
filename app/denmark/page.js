"use client";

import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/BreadCrumb';

export default function DenmarkPage() {
  // List of PDF files to display as preview links
  const pdfs = [
    { filename: 'NORTH_Group_Letter-2024-11-25_DENMARK.pdf', label: 'Bekymringsbrev Denmark' },
    { filename: 'NORTH_Group_Summary-2024-11-25_DENMARK.pdf', label: 'Videnskabeligt lægmandsresumé' },
    { filename: 'Press Release_Short_25.11.2024Denmark.pdf', label: 'Kort Pressemeddelelse' },
    { filename: 'Press Release_Long_25.11.2024Denmark.pdf', label: 'Lang Pressemeddelelse' },
    { filename: 'Follow_Up_Letter_NORTH_Denmark.pdf', label: 'Opfølgningsbrev Denmark' },
  ];

  // Breadcrumb navigation
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/denmark', label: 'Denmark' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Preview PDFs for Denmark</h1>
          <div className={styles.linkContainer}>
            {pdfs.map((pdf, index) => (
              <Link
                key={index}
                href={`/denmark/pdf/${pdf.filename}`} // Clean URL
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice
                className={`${styles.link} ${styles[`link${index + 1}`]}`}
              >
                {pdf.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
