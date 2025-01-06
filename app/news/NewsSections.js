'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import styles from './NewsSections.module.css'
import SecureTweetEmbed from '@/components/SecureTweetEmbed'

export default function NewsSections({ sections, textNews }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)

  const handleVideoClick = (item) => {
    if (currentVideo === item.id) {
      handlePlayPause();
    } else {
      setCurrentVideo(item.id);
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.newsContainer}>
        <div className={styles.videoSection}>
          <h2 className={styles.videoSectionTitle}>Video News</h2>
          <div className={styles.videoGrid}>
            {Array.from({ length: Math.ceil(sections.length / 2) }).map((_, rowIndex) => (
              <div key={rowIndex} className={styles.videoRow}>
                {sections.slice(rowIndex * 2, (rowIndex * 2) + 2).map((section, index) => (
                  <div key={index} className={styles.newsSection}>
                    <h3>{section.title}</h3>
                    <div className={styles.newsItem} onClick={() => handleVideoClick(section.videoItem)}>
                      <h4 className={styles.videoItemTitle}>{section.videoItem.title}</h4>
                      <div className={styles.videoThumbnail}>
                        {currentVideo === section.videoItem.id ? (
                          <video 
                            ref={videoRef}
                            src={`/api/video/${section.videoItem.id}`} 
                            className={styles.videoPlayer}
                            preload="metadata"
                            controls={true}
                            playsInline
                          />
                        ) : (
                          <>
                            <video 
                              src={`/api/video/${section.videoItem.id}`} 
                              className={styles.videoPreview} 
                              preload="metadata"
                              muted
                              playsInline
                              loading="lazy"
                            />
                            <div className={styles.playButton}>▶</div>
                          </>
                        )}
                      </div>
                      <div className={styles.videoDescription}>
                        <p>{section.videoItem.description}</p>
                        {section.videoItem.source ? (
                          <Link href={section.videoItem.source} className={styles.sourceLink} target="_blank" rel="noopener noreferrer">Go to source</Link>
                        ) : (
                          <span className={styles.sourceLink}>Source not available</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <SecureTweetEmbed
        tweetId="1875876925803241727" // Replace with an actual tweet ID
        // tweetTitle="Check out this amazing video!"
        // tweetSourceLink="https://twitter.com/https://x.com/PageOf_History/status/1875876925803241727/status/133454545456"
      />

        <div className={styles.moreNewsSection}>
          <h2 className={styles.textNewsHeader}>More News</h2>
          <div className={styles.textNewsGrid}>
            {Array.from({ length: Math.ceil(textNews.length / 3) }).map((_, rowIndex) => (
              <div key={rowIndex} className={styles.textNewsRow}>
                {textNews.slice(rowIndex * 3, (rowIndex * 3) + 3).map((item, index) => (
                  <div key={index} className={styles.textNewsItem}>
                    <h3 className={styles.textNewsItemTitle}>{item.title}</h3>
                    <p className={styles.textNewsItemContent}>{item.content.substring(0, 150)}...</p>
                    <Link href={item.link} className={styles.readMore}>Read more</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
