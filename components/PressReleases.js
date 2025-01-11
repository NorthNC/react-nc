'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/components/hooks/useTranslation';
import styles from './PressReleases.module.css';

function PressRelease({ release }) {
  const handlePreviewClick = (filePath) => {
    const previewUrl = `/pdfs/${filePath}`;
    console.log('Opening preview URL:', previewUrl);
    window.open(previewUrl, '_blank');
  };

  const handleDownloadClick = async (filePath) => {
    try {
      const downloadUrl = `/pdfs/${filePath}`;
      console.log('Downloading from URL:', downloadUrl);
      const response = await fetch(downloadUrl);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filePath.split('/').pop();
        link.click();

        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download the file:', response.statusText);
      }
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (
    <div className={styles.release}>
      <div className={styles.content}>
        <h2 className={styles.title}>{release.title}</h2>
        <p className={styles.date}>{release.date}</p>
        <p className={styles.text}>{release.content}</p>
      </div>
      <div className={styles.actions}>
        <button
          onClick={() => handlePreviewClick(release.pdfFile)}
          className={styles.previewButton}
        >
          Preview PDF
        </button>
        <button
          onClick={() => handleDownloadClick(release.pdfFile)}
          className={styles.downloadButton}
        >
          Download PDF
        </button>
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
  const [pressReleases, setPressReleases] = useState([]);

  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const response = await fetch(`/api/pressReleases?country=${selectedCountry}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched press releases:', data);
          setPressReleases(data);
        } else {
          console.error('Failed to fetch press releases:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching press releases:', error);
      }
    };

    fetchPressReleases();
  }, [selectedCountry]);

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
          <option value="belgium">{t('countries.belgium', 'Belgium')}</option>
        </select>
      </div>
      <PressReleaseList releases={pressReleases} />
    </div>
  );
}

