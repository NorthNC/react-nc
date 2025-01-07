"use client";

import styles from './About.module.css';
import { useTranslation } from '@/components/hooks/useTranslation';

export default function About() {
  const { t } = useTranslation("About"); // Load translations for the About component

  return (
    <section className={styles.aboutSection} id="aboutScroll">
      <div className={styles.aboutContainer}>
        <h2>{t("header", "About Us")}</h2>
        <p>{t("content", "NORTH, A growing coalition of engaged citizens from countries throughout Northern Europe. To raise awareness about the potential harms posed by modified mRNA therapeutics.")}</p>
        <div className={styles.email}>
          <p>
            <span>{t("contact", "Contact us at:")} </span>
            <a href="mailto:info@northgroup.info">info@northgroup.info</a>
          </p>
        </div>
      </div>
    </section>
  );
}
