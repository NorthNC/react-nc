// 'use client' for client-side functionality
'use client';

import React from 'react';
import PropTypes from 'prop-types'; // Optional, for prop validation
import styles from './SecureTweetEmbed.module.css'; // CSS Module for styles

// Helper function to validate tweetId (basic example, you can expand validation)
const isValidTweetId = (tweetId) => {
  // Ensure tweetId is a valid Twitter ID (number or alphanumeric)
  return /^[A-Za-z0-9_]+$/.test(tweetId);
};

const SecureTweetEmbed = ({ tweetId, tweetTitle, tweetSourceLink }) => {
  // Validate the tweetId before rendering
  if (!tweetId || !isValidTweetId(tweetId)) {
    return <p className={styles.error}>Invalid tweet ID.</p>;
  }

  return (
    <div className={styles.tweetEmbedContainer}>
      <div className={styles.tweetEmbed}>
        {/* Embed Twitter video using official iframe embed code */}
        <iframe
          src={`https://twitframe.com/show?url=https://twitter.com/twitter/status/${tweetId}`}
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen
          title="Twitter Video"
        ></iframe>

        {/* Text description under the video */}
        {tweetTitle && <p className={styles.tweetTitle}>{tweetTitle}</p>}

        {/* Link to the original tweet */}
        {tweetSourceLink && (
          <a
            href={tweetSourceLink}
            className={styles.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Tweet
          </a>
        )}
      </div>
    </div>
  );
};

// Prop Types for validation
SecureTweetEmbed.propTypes = {
  tweetId: PropTypes.string.isRequired,
  tweetTitle: PropTypes.string,
  tweetSourceLink: PropTypes.string,
};

export default SecureTweetEmbed;
