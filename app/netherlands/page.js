"use client";

import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/BreadCrumb';

export default function NetherlandsPage() {
  // List of PDF files to display as preview links
  const pdfs = [
    { filename: 'north_letter_netherland.pdf', label: 'Zorgenbrief' },
    { filename: 'north_lay_summary_netherland.pdf', label: 'Lekensamenvatting' },
  ];

  // Breadcrumb navigation
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/netherlands', label: 'Netherlands' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Preview PDFs for Netherlands</h1>
          <div className={styles.linkContainer}>
            {pdfs.map((pdf, index) => (
              <Link
                key={index}
                href={`/netherlands/pdf/${pdf.filename}`} // Clean URL
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
