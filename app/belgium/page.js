import Link from 'next/link'
import styles from './page.module.css'
import Breadcrumb from '@/components/BreadCrumb'

export default function DownloadPage() {
    const breadcrumbItems = [
        { href: '/', label: 'Home' },
        { href: '/belgium', label: 'Belgium' },
      ];
  return (
    <>
        <Breadcrumb items={breadcrumbItems} />
      <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Download PDFs</h1>
        <div className={styles.linkContainer}>
          <Link 
            href="/document1.pdf" 
            download
            className={`${styles.link} ${styles.link1}`}
          >
            Download Document 1
          </Link>
          <Link 
            href="/document2.pdf" 
            download
            className={`${styles.link} ${styles.link2}`}
          >
            Download Document 2
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

