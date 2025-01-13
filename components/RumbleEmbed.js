import React, { useState } from 'react';
import styles from './RumbleEmbed.module.css';

const RumbleEmbed = ({ videoId, pub = '4' }) => {
  const [consentGiven, setConsentGiven] = useState(false);
  const iframeSrc = `https://rumble.com/embed/${videoId}/?pub=${pub}`;

  const handleConsent = () => {
    setConsentGiven(true);
  };

  return (
    <div className={styles.iframeWrapper}>
      {!consentGiven ? (
        <div className={styles.placeholder}>
          <p>This video is hosted on Rumble. To view it, you must accept external content.</p>
          <button onClick={handleConsent} className={styles.consentButton}>
            Accept and View Video
          </button>
        </div>
      ) : (
        <iframe
          src={iframeSrc}
          className={styles.iframe}
          allowFullScreen
          title="Rumble Video"
        ></iframe>
      )}
    </div>
  );
};

export default RumbleEmbed;
