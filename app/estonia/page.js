"use client";

import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/BreadCrumb';

export default function EstoniaPage() {
  // List of PDF files to display as preview links
  const pdfs = [
    { filename: 'Pöördumine NORTH 26.11.2024.pdf', label: 'Pöördumine' },
    { filename: 'Lühikokkuvõte teadusandmetest.pdf', label: 'Teadusandmete lühikokkuvõte' },
    { filename: 'NORTH _press_release_estonia.pdf', label: 'Pressiteade' },
    { filename: 'Modifitseeritud_mRNA_vaktsiinide_jääk_DNA_kontaminatsioon_vastus_faktikontrollile_13_22024.pdf', label: 'Vastus Eesti Päevalehe „faktikontrollile“' },
  ];

  // Breadcrumb navigation
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/estonia', label: 'Estonia' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Preview PDFs for Estonia</h1>
          <div className={styles.linkContainer}>
            {pdfs.map((pdf, index) => (
              <Link
                key={index}
                href={`/estonia/pdf/${pdf.filename}`} // Clean URL
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
