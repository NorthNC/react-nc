'use client';

import VideoPlayer from '../../components/VideoPlayer';
import NewsBox from '../../components/NewsBox';
import styles from './page.module.css';
import ScrollToTopButton from '@/components/ScrollToTop';
import Breadcrumb from '@/components/BreadCrumb';
import { useTranslation } from '@/components/hooks/useTranslation';
import PressReleases from '@/components/PressReleases';
import RumbleEmbed from '@/components/RumbleEmbed';

export default function NewsPage() {
  const { t } = useTranslation('news'); // Load translations for 'news'

  const breadcrumbItems = [
    { href: '/', label: t('breadcrumb.home', 'Home') },
    { href: '/news', label: t('breadcrumb.news', 'News') },
  ];

  const newsItems = [
    {
      id: 1,
      title: t('newsItems.breakingNews.title', 'Breaking News'),
      image: "/placeholder.svg?height=200&width=300",
      summary: t('newsItems.breakingNews.summary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
      link: "/news/1"
    },
    {
      id: 2,
      title: t('newsItems.techUpdate.title', 'Technology Update'),
      image: "/placeholder.svg?height=200&width=300",
      summary: t('newsItems.techUpdate.summary', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
      link: "/news/2"
    },
    {
      id: 3,
      title: t('newsItems.sportsHighlights.title', 'Sports Highlights'),
      image: "/placeholder.svg?height=200&width=300",
      summary: t('newsItems.sportsHighlights.summary', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
      link: "/news/3"
    }
  ];

  const videos = [
    {
      id: "1",
      title: t('videos.dailyNews.title', 'Daily News Roundup'),
      reference: {
        text: t('videos.dailyNews.source.text', 'Source: NewsChannel'),
        url: t('videos.dailyNews.source.url', 'https://newschannel.com'),
      },
    },
    {
      id: "2",
      title: t('videos.techTrends.title', 'Tech Trends Weekly'),
      reference: {
        text: t('videos.techTrends.source.text', 'Source: TechWave'),
        url: t('videos.techTrends.source.url', 'https://techwave.com'),
      },
    }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ScrollToTopButton />
      <div className={styles.container}>
        <h1 className={styles.title}>{t('latestNews', 'Latest News')}</h1>
        {videos.map((video) => (
          <div key={video.id}>
            <p className={styles.videoTitle}>{video.title}</p>
            <VideoPlayer videoId={video.id} />
            <a href={video.reference.url} className={styles.videoReference}>
              {video.reference.text}
            </a>
          </div>
        ))}
        <h2 className={styles.NewsBoxHeader}>{t('moreNews', 'More News')}</h2>
        <div className={styles.newsGrid}>
          {newsItems.map((item) => (
            <NewsBox key={item.id} {...item} />
          ))}
        </div>
        {/* <RumbleEmbed videoId="v66mbz1" /> */}
      </div>
    </>
  );
}
