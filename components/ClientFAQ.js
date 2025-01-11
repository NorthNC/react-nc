'use client';

import { useTranslation } from '@/components/hooks/useTranslation';
import FAQPage from '@/components/FAQPage';
import Breadcrumb from '@/components/BreadCrumb';
import styles from '../styles/ClientFAQ.module.css';

export default function ClientFAQ() {
  const { t } = useTranslation('FAQ');

  // Retrieve translated FAQ data
  const faqData = t('faqs', []); // Default to an empty array if 'faqs' key is missing

  // Debug to check the data structure
  console.log('FAQ Data:', faqData);

  const breadcrumbItems = [
    { href: '/', label: t('home', 'Home') },
    { href: '/FAQ', label: t('faq', 'FAQ') },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className={styles.title}>{t('pageTitle', 'Frequently Asked Questions')}</h1>
      <FAQPage faqs={faqData} />
    </div>
  );
}
