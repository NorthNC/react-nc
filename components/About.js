"use client";

import styles from './About.module.css';
import { useTranslation } from '@/components/hooks/useTranslation';
import Breadcrumb from './BreadCrumb';

export default function About() {
  const { t } = useTranslation("About"); // Load translations for the About component

  const breadcrumbItems = [
    { href: '/', label: t('home', 'Home') },
    { href: '/about', label: t('about', 'About') },
  ];

  return (
    <section className={styles.aboutSection} id="aboutScroll">
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.aboutContainer}>
        <h2>{t("header", "About Us")}</h2>
        <p>{t("content", "NORTH, A growing coalition of engaged citizens from countries throughout Northern Europe. To raise awareness about the potential harms posed by modified mRNA therapeutics.")}</p>
        <div className={styles.email}>
          <p>
            <span>{t("contact", "Contact us at:")} </span>
            <a href="mailto:info@northgroup.info">info@northgroup.info</a>
          </p>
        </div>
        <section className={styles.section}>
        <h3>What is the problem?</h3>
        <p>Describe the problem your company is addressing here.</p>
      </section>
      
      <section className={styles.section}>
        <h3>What is NORTH doing about it?</h3>
        <p>Explain the actions and initiatives NORTH is taking to address the problem.</p>
      </section>
      
      <section className={styles.section}>
        <h3>What should you do about it?</h3>
        <p>Provide information on how individuals can contribute or take action regarding the problem.</p>
      </section>
      </div>
    </section>
  );
}
