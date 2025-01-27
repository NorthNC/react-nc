import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/BreadCrumb';

export default function CzechRepublicPage() {
  // List of PDF files to display as preview links
  const pdfs = [
    { filename: 'north_group_letter_CZECH.pdf', label: 'Dopis pro představitele států' },
    { filename: 'lay_summery_czech-republic.pdf', label: 'Souhrn informací pro laiky' },
    { filename: 'Follow_Up_Letter_NORTH_CZECH.pdf', label: 'Dopis pro představitele států 2' },
  ];

  // Breadcrumb navigation
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/czech-republic', label: 'Czech Republic' },
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
                href={`/czech-republic/pdf/${pdf.filename}`} // Directly links to the file
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
