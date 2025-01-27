"use client";

import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/BreadCrumb';

export default function NorwayPage() {
  // List of PDF files to display as preview links
  const pdfs = [
    { filename: 'NORTH_Group_Letter_NORWAY.pdf', label: 'Bekymringsbrev' },
    { filename: 'NORTH_Group_Summary_NORWAY.pdf', label: 'Faktaunderlag bekymringsbrev' },
    { filename: 'press_release_norway.pdf', label: 'Pressemelding 16 Jan 2025' },
    { filename: 'Follow_Up_Letter_NORTH_NORWAY.pdf', label: 'Oppfølgingsbrev' },
  ];

  // Breadcrumb navigation
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/norway', label: 'Norway' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Preview PDFs for Norway</h1>
          <div className={styles.linkContainer}>
            {pdfs.map((pdf, index) => (
              <Link
                key={index}
                href={`/norway/pdf/${pdf.filename}`} // Clean URL
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
