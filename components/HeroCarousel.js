"use client";

import { useState, useEffect } from 'react'
import styles from './HeroCarousel.module.css'

const texts = [
  "A growing list of national representatives and international experts demand an immediate suspension of COVID-19 modified mRNA vaccines. Ireland joined NORTH on 28th November, followed by the Czech Republic and Portugal this past week. Questions have been raised by members of parliament in the Swedish and Danish parliaments. Representatives of several other European countries are lining up to join the NORTH initiative next week.",
  "Notice of extreme concern about COVID-19 modified mRNA vaccine safety and quality to prime ministers and governing bodies In the Nordic and Baltic countries and the United Kingdom. Excessive levels of residual DNA identified in Australian samples, confirming data from France, Germany, Canada, and the USA. The introduction of foreign DNA into cells via lipid nanoparticles (LNPs) may damage human DNA leading to genomic instability, cancer, and other extremely serious conditions.",
  "Our letter of concern, co-signed by physicians, scientists, politicians, and other qualified professionals calls for the immediate suspension of COVID-19 modified mRNA vaccines and an investigation into the presence of excessive levels of residual DNA in multiple vials, which is a serious, unquantified risk to human health. This lay summary explains the background to these concerns.",
  "Experience Unique Features"
];

const headers = [
  "Press release (English version)",
  "Letter of concern (English version)",
  "Lay summary to prime ministers and politicians (English version)",
  "Experience Unique Features"
];

const links = [
  "/welcome",
  "/solutions",
  "/community",
  "/features"
];

const additionalH3 = {
  0: "BREAKING NEWS – 8th December 2024 – Expanding NORTH!" // Only for the first slide (index 0)
};

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % texts.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCarousel}>
        <div className={`${styles.carouselItem} ${styles.active}`}>
          {currentSlide === texts.length - 1 ? (
            <>
              <h2>{headers[currentSlide]}</h2>
              <p>Discover unparalleled aspects of our platform:</p>
              <ul>
                <li>Interactive Engagement</li>
                <li>Advanced Security</li>
                <li>Customizable User Experience</li>
              </ul>
              <div className={styles.carouselLink}>
                <a href={links[currentSlide]}>Download PDF</a>
              </div>
            </>
          ) : (
            <>
              <h1>{headers[currentSlide]}</h1>
              {additionalH3[currentSlide] && <h3>{additionalH3[currentSlide]}</h3>}
              <p>{texts[currentSlide]}</p>
              <div className={styles.carouselLink}>
                <a href={links[currentSlide]}>Download PDF</a>
              </div>
            </>
          )}
        </div>
        <div className={styles.carouselDots}>
          {texts.map((_, index) => (
            <span 
              key={index} 
              className={index === currentSlide ? `${styles.dot} ${styles.activeDot}` : styles.dot}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}