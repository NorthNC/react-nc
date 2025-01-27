"use client";

import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/BreadCrumb';

export default function PortugalPage() {
  // List of PDF files to display as preview links
  const pdfs = [
    { filename: 'Letter_consern_PORTUGAL.pdf', label: 'Carta de preocupação' },
    { filename: 'lay_summary_portugal.pdf', label: 'Resumo para leigos' },
    { filename: 'Follow_Up_Letter_NORTH_PORTUGAL.pdf', label: 'Segunda carta' },
  ];

  // Breadcrumb navigation
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/portugal', label: 'Portugal' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Preview PDFs for Portugal</h1>
          <div className={styles.linkContainer}>
            {pdfs.map((pdf, index) => (
              <Link
                key={index}
                href={`/portugal/pdf/${pdf.filename}`} // Clean URL
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
