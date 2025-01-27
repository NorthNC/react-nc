'use client';

import FAQPage from '@/components/FAQPage';
import styles from './page.module.css'
import Breadcrumb from '@/components/BreadCrumb';

export default function FAQWrapper() {

  const breadcrumbItems = [
    { href: '/', label: ('breadcrumb.home', 'Home') },
    { href: '/faq', label: ('breadcrumb.faq', 'Official Responses') },
  ];
  // Ensure that this data is consistent and matches server-rendered content
  const faqs = [
    {
      id: '1',
      question: 'What are your opening hours?',
      answer: "We're open from 9 AM to 10 PM, seven days a week.",
      subItems: [
        { id: '1-1', label: 'Weekday Hours', content: 'Monday to Friday: 9 AM - 10 PM' },
        { id: '1-2', label: 'Weekend Hours', content: 'Saturday and Sunday: 9 AM - 11 PM' },
      ],
    },
    {
      id: '2',
      question: 'Do you offer vegetarian options?',
      answer: 'Yes, we have a wide range of vegetarian dishes available.',
      subItems: [
        { id: '2-1', label: 'Vegetarian Starters', content: 'Salads, soups, and appetizers.' },
        { id: '2-2', label: 'Vegetarian Starters', content: 'Salads, soups, and appetizers.' },
      ],
    },
    
  ];

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className={styles.header}>Official Responses</h1>
      <FAQPage faqs={faqs} />
    </main>
  );
}
