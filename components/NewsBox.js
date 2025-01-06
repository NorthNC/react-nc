import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsBox.module.css';

export default function NewsBox({ title, image, summary, link }) {
  return (
    <div className={styles.newsBox}>
      <Image src={image} alt={title} width={300} height={200} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.summary}>{summary}</p>
      <Link href={link} className={styles.link}>Read more</Link>
    </div>
  );
}

