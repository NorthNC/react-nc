import HeroCarousel from "../components/HeroCarousel";
import NewsGrid from "../components/NewsGrid";
import CookieConsent from "../components/CookieConsent";
import ScrollToTopButton from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <NewsGrid />
      <ScrollToTopButton />
      <CookieConsent />
    </>
  );
}
