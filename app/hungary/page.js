"use client";

import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/BreadCrumb';

export default function HungaryPage() {
  // List of PDF files to display as preview links
  const pdfs = [
    { filename: 'north_letter_hungary.pdf', label: 'Nyílt Levél' },
    { filename: 'north_lay_summery.pdf', label: 'Közérthető tudományos összefoglaló' },
    { filename: 'press_release_hungary.pdf', label: 'Sajtóközlemény' },
    { filename: 'Follow_Up_Letter_NORTH_HUNGARY.pdf', label: 'Második levél' },
  ];

  // Breadcrumb navigation
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/hungary', label: 'Hungary' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Preview PDFs for Hungary</h1>
          <div className={styles.linkContainer}>
            {pdfs.map((pdf, index) => (
              <Link
                key={index}
                href={`/hungary/pdf/${pdf.filename}`} // Clean URL
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
