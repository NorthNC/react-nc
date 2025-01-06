// import '/styles/globals.css'
// import NewsSections from './NewsSections'

// const newsSections = [
//   {
//     title: "Top Stories",
//     videoItem: { 
//       id: 1, 
//       title: "Breaking News", 
//       content: "Major event unfolding live. Stay tuned for updates on this developing story that's capturing global attention." 
//     },
//     textItem: { 
//       title: "Economic Policy Changes", 
//       content: "Government announces new economic policies aimed at boosting growth. The new measures include tax incentives for small businesses, increased infrastructure spending, and reforms to encourage foreign investment.",
//       link: "https://example.com/economic-policy-changes"
//     }
//   },
//   {
//     title: "Technology",
//     videoItem: { 
//       id: 2, 
//       title: "New Gadget Release", 
//       content: "Tech giant unveils its latest innovation. This cutting-edge device promises to revolutionize how we interact with technology in our daily lives." 
//     },
//     textItem: { 
//       title: "AI Breakthrough", 
//       content: "Researchers develop new AI model with human-like reasoning capabilities. The new model, dubbed 'CogniTron', has demonstrated unprecedented problem-solving abilities in complex scenarios, potentially revolutionizing fields from medicine to space exploration.",
//       link: "https://example.com/ai-breakthrough"
//     }
//   },
//   {
//     title: "Sports",
//     videoItem: { 
//       id: 3, 
//       title: "Championship Highlights", 
//       content: "Relive the most exciting moments from last night's championship game. Spectacular plays, nail-biting finishes, and post-game reactions from star players." 
//     },
//     textItem: { 
//       title: "Olympic Committee Meeting", 
//       content: "Discussions underway for future Olympic host cities. The committee is considering a revolutionary approach to hosting the games, including the possibility of a multi-city or even multi-country Olympics to distribute the economic burden and increase global participation.",
//       link: "https://example.com/olympic-committee-meeting"
//     }
//   }
// ];

// const textNews = [
//   {
//     title: "Global Climate Summit Concludes",
//     content: "World leaders reach landmark agreement on emissions reduction targets. The summit, which lasted for three days, saw intense negotiations and resulted in a commitment to achieve net-zero emissions by 2050.",
//     link: "/news/climate-summit"
//   },
//   {
//     title: "New Medical Breakthrough in Cancer Treatment",
//     content: "Scientists announce promising results in early trials of a novel cancer therapy. The treatment, which combines immunotherapy with targeted drug delivery, has shown remarkable success in reducing tumor size in patients with advanced-stage cancers.",
//     link: "/news/cancer-breakthrough"
//   },
//   {
//     title: "Tech Giant Faces Antitrust Lawsuit",
//     content: "Major technology company under scrutiny for alleged monopolistic practices. The lawsuit, filed by a coalition of state attorneys general, accuses the company of stifling competition and manipulating market prices.",
//     link: "/news/tech-antitrust"
//   },
//   {
//     title: "Record-Breaking Space Tourism Flight",
//     content: "Private space company successfully launches first all-civilian crew to orbit. The mission, which lasted for three days, marks a significant milestone in the commercialization of space travel and opens up new possibilities for future space tourism.",
//     link: "/news/space-tourism"
//   }
// ];

// export default function NewsPage() {
//   return (
//     <div className="page-wrapper">
//       <div className="news-container">
//         <h1 className="news-header">Latest News</h1>
//         <NewsSections sections={newsSections} textNews={textNews} />
//       </div>
//     </div>
//   )
// }


import VideoPlayer from '../../components/VideoPlayer';
import NewsBox from '../../components/NewsBox';
import styles from './page.module.css';
import SecureTweetEmbed from '@/components/SecureTweetEmbed';

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Breaking News",
      image: "/placeholder.svg?height=200&width=300",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/news/1"
    },
    {
      id: 2,
      title: "Technology Update",
      image: "/placeholder.svg?height=200&width=300",
      summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "/news/2"
    },
    {
      id: 3,
      title: "Sports Highlights",
      image: "/placeholder.svg?height=200&width=300",
      summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      link: "/news/3"
    }
  ];

  // Define video details
  const videos = [
    {
      id: "1",
      title: "Daily News Roundup",
      reference: { text: "Source: NewsChannel", url: "https://newschannel.com" }
    },
    {
      id: "2",
      title: "Tech Trends Weekly",
      reference: { text: "Source: TechWave", url: "https://techwave.com" }
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest News</h1>
      {videos.map(video => (
        <div key={video.id}>
          <p className={styles.videoTitle}>{video.title}</p>
          <VideoPlayer videoId={video.id} />
          <a href={video.reference.url} className={styles.videoReference}>{video.reference.text}</a>
        </div>
      ))}
      {/* <div>
      <SecureTweetEmbed
        tweetId="1875876925803241727" // Replace with an actual tweet I
      />
      </div> */}
      <h2 className={styles.NewsBoxHeader}>More News</h2>
      <div className={styles.newsGrid}>
        {newsItems.map((item) => (
          <NewsBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}