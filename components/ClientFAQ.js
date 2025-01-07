'use client';

import { useTranslation } from '@/components/hooks/useTranslation';
import FAQPage from '@/components/FAQPage';
import Breadcrumb from '@/components/BreadCrumb';
import styles from '../styles/ClientFAQ.module.css';

export default function ClientFAQ() {
  const { t, language } = useTranslation('FAQ');

  const breadcrumbItems = [
    { href: '/', label: t('home', 'Home') },
    { href: '/FAQ', label: t('faq', 'FAQ') },
  ];

  const faqData = t('faqs', []);

  console.log('FAQ Data:', faqData);

  return (
    <div>
        <Breadcrumb items={breadcrumbItems} />

      <h1 className={styles.title}>{t('pageTitle', 'FAQ')}</h1>
      <FAQPage faqs={faqData} />
    </div>
  );
}

