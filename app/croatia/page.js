import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/BreadCrumb';

export default function CroatiaPage() {
  // List of PDF files to display as preview links
  const pdfs = [
    { filename: 'north_letter_croatia.pdf', label: 'Pismo zabrinutosti' },
    { filename: 'lay_summary_croatia.pdf', label: 'Sažetak za širu' },
    { filename: 'Follow_Up_Letter_NORTH_CROATIA.pdf', label: 'Drugo pismo' },
  ];

  // Breadcrumb navigation
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/croatia', label: 'Croatia' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Preview PDFs for Croatia</h1>
          <div className={styles.linkContainer}>
            {pdfs.map((pdf, index) => (
              <Link
                key={index}
                href={`/croatia/pdf/${pdf.filename}`} // Directly links to the file
                target="_blank" // Opens in a new tab for preview
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
