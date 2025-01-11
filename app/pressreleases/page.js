'use client';

import { useState } from 'react';
import { useTranslation } from '@/components/hooks/useTranslation';
import styles from './PressReleases.module.css';

function PressRelease({ release }) {
  return (
    <div className={styles.release}>
      <div className={styles.content}>
        <h2 className={styles.title}>{release.title}</h2>
        <p className={styles.date}>{release.date}</p>
        <p className={styles.text}>{release.content}</p>
      </div>
      <div className={styles.downloadContainer}>
        <a
          href={`/api/pdfs/${release.pdfFile}`} // Link to the API route
          target="_blank" // Open in a new tab
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Preview/Download PDF
        </a>
      </div>
    </div>
  );
}

function PressReleaseList({ releases }) {
  return (
    <div className={styles.list}>
      {releases.map((release) => (
        <PressRelease key={release.id} release={release} />
      ))}
    </div>
  );
}

export default function PressReleases() {
  const { t } = useTranslation('PressReleases');
  const [selectedCountry, setSelectedCountry] = useState('usa');

  const pressReleases = {
    usa: [
      {
        id: 1,
        title: t('usa.releases.1.title', 'New Product Launch in USA'),
        date: t('usa.releases.1.date', '2023-06-01'),
        content: t(
          'usa.releases.1.content',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ),
        pdfFile: 'belgium/pdf/old/goup_letter_belgium.pdf', // Path to the new report
      },
      {
        id: 2,
        title: t('usa.releases.2.title', 'Q2 Financial Results for USA'),
        date: t('usa.releases.2.date', '2023-07-15'),
        content: t(
          'usa.releases.2.content',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ),
        pdfFile: 'usa/pdf/old/old-report1.pdf', // Path to the old report
      },
    ],
    uk: [
      {
        id: 1,
        title: t('uk.releases.1.title', 'UK Market Expansion'),
        date: t('uk.releases.1.date', '2023-05-20'),
        content: t(
          'uk.releases.1.content',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ),
        pdfFile: 'uk/pdf/new-report1.pdf', // Path to the new report
      },
      {
        id: 2,
        title: t('uk.releases.2.title', 'New Partnership in UK'),
        date: t('uk.releases.2.date', '2023-07-01'),
        content: t(
          'uk.releases.2.content',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ),
        pdfFile: 'uk/pdf/old/old-report1.pdf', // Path to the old report
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>{t('pageTitle', 'Press Releases')}</h1>
      <div className={styles.countrySelector}>
        <label htmlFor="country-select">{t('selectCountry', 'Select Country:')}</label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className={styles.select}
        >
          <option value="usa">{t('countries.usa', 'USA')}</option>
          <option value="uk">{t('countries.uk', 'UK')}</option>
        </select>
      </div>
      <PressReleaseList releases={pressReleases[selectedCountry]} />
    </div>
  );
}
