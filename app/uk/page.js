"use client";

import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/BreadCrumb';

export default function UKPage() {
  // List of PDF files to display as preview links
  const pdfs = [
    { filename: 'NORTH_Group_Letter-2024-11-25_UK.pdf', label: 'Letter of concern' },
    { filename: 'NORTH_Group_Summary-2024-11-25_UK.pdf', label: 'Lay summary' },
    { filename: 'Follow_Up_Letter_NORTH_UK.pdf', label: 'Follow up Letter' },
  ];

  // Breadcrumb navigation
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/uk', label: 'United Kingdom' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Preview PDFs for United Kingdom</h1>
          <div className={styles.linkContainer}>
            {pdfs.map((pdf, index) => (
              <Link
                key={index}
                href={`/uk/pdf/${pdf.filename}`} // Clean URL
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
