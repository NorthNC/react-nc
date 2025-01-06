
import HeroCarousel from '../components/HeroCarousel'
import NewsGrid from '../components/NewsGrid'
import About from '../components/About'
import CookieConsent from '../components/CookieConsent'
import NewsTicker from '@/components/NewsTicker'

export default function Home() {
  return (
    <>
      <main>
        <HeroCarousel />
        <NewsGrid />
        <About />
      </main>
      <CookieConsent />
    </>
  )
}

