"use client";

import { useState, useEffect } from "react";
import styles from "./HeroCarousel.module.css";
import { useTranslation } from "@/components/hooks/useTranslation";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation("HeroCarousel");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % t("texts", []).length);
    }, 7000);
    return () => clearInterval(timer);
  }, [t]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const texts = t("texts", []);
  const headers = t("headers", []);
  const links = t("links", []);
  const additionalH3 = t("additionalH3", {});

  // Map links to the clean public URL
  const resolvedLinks = links.map((link) => {
    const filename = link.split("/").pop(); // Extract the file name
    return `/pdfs/${filename}`; // Use the clean URL
  });

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCarousel}>
        <div className={`${styles.carouselItem} ${styles.active}`}>
          {currentSlide === texts.length - 1 ? (
            <>
              <h2>{headers[currentSlide]}</h2>
              <p>{t("uniqueFeatures.description", "Discover unparalleled aspects of our platform:")}</p>
              <ul>
                <li>{t("uniqueFeatures.features.interactiveEngagement", "Interactive Engagement")}</li>
                <li>{t("uniqueFeatures.features.advancedSecurity", "Advanced Security")}</li>
                <li>{t("uniqueFeatures.features.customizableUserExperience", "Customizable User Experience")}</li>
              </ul>
              <div className={styles.carouselLink}>
                <a
                  href={resolvedLinks[currentSlide]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("uniqueFeatures.linkText", "Download PDF")}
                </a>
              </div>
            </>
          ) : (
            <>
              <h1>{headers[currentSlide]}</h1>
              {additionalH3[currentSlide] && <h3>{additionalH3[currentSlide]}</h3>}
              <p>{texts[currentSlide]}</p>
              <div className={styles.carouselLink}>
                <a
                  href={resolvedLinks[currentSlide]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("general.linkText", "Download PDF")}
                </a>
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
  );
}
