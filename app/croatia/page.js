import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumb from '@/components/BreadCrumb';

export default function CroatiaPage() {
  // List of PDF files to display as preview links
  const pdfs = [
    { filename: 'north_letter_croatia.pdf', label: 'View Document 1' },
    { filename: 'lay_summary_croatia.pdf', label: 'View Document 2' },
    { filename: 'North_Group.pdf', label: 'View North Group Report' },
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
