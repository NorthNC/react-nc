'use client'

import { useRef, useEffect, useState } from 'react';
import styles from './VideoPlayer.module.css';

export default function VideoPlayer({ videoId }) {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(videoRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/video/${videoId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const videoUrl = response.url; // Assuming the API returns the URL to the video
        setVideoSrc(videoUrl);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (videoId && isVisible) {
      fetchVideo();
    }
  }, [videoId, isVisible]);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  if (loading && !error && isVisible) {
    return <div className={styles.placeholder}>Loading video...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!isVisible) {
    return <div ref={videoRef} className={styles.placeholder}>Video will load when visible</div>;
  }

  return (
    <div className={styles.videoContainer}>
      <div
        className={styles.videoOverlay}
        onContextMenu={handleContextMenu}
      />
      <video
        ref={videoRef}
        src={videoSrc}
        controls
        className={styles.video}
        aria-label="Video player"
        onContextMenu={handleContextMenu}
        controlsList="nodownload noremoteplayback"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
