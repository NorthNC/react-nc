"use client";

import React from "react";
import Image from "next/image";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import { useTranslation } from "@/components/hooks/useTranslation";

const logos = [
  "/logos/danmark.png",
  "/logos/lettland.png",
  "/logos/norge.png",
  "/logos/sverige.png",
  "/logos/czech-republic.png",
  "/logos/estland.png",
  "/logos/litauen.png",
  "/logos/island.png",
  "/logos/finland.png",
  "/logos/gronland.png",
  "/logos/irland.png",
  "/logos/portugal.png",
  "/logos/uk.png",
  "/logos/malta.png",
  "/logos/belgium.png",
  "/logos/hungarian.png",
  "/logos/holland.png",
  "/logos/croatia.png",
  "/logos/spain.png",
];

const countriesKeys = [
  "Denmark",
  "Latvia",
  "Norway",
  "Sweden",
  "Czech Republic",
  "Estonia",
  "Lithuania",
  "Iceland",
  "Finland",
  "Greenland",
  "Ireland",
  "Portugal",
  "UK",
  "Malta",
  "Belgium",
  "Hungary",
  "Netherlands",
  "Croatia",
  "Spain",
];

const languages = ["en", "fr"]; // List of available languages

export default function Header() {
  const { t, language, changeLanguage } = useTranslation("header");

  const northLogo = "/logos/north-logo.png";
  const logosPerSide = Math.floor(logos.length / 2);
  const leftSideLogos = logos.slice(0, logosPerSide);
  const rightSideLogos = logos.slice(logosPerSide);

  return (
    <header className="header">
      <div className="logo-container">
        {/* Left Column */}
        <div className="logo-column">
          <div className="logo-row">
            {leftSideLogos.slice(0, Math.ceil(logosPerSide / 2)).map((logo, index) => (
              <div key={index} className="logo-item">
                <Image
                  src={logo}
                  alt={t(`countries.${countriesKeys[index]}`)}
                  width={100}
                  height={78}
                  style={{ objectFit: "contain" }}
                />
                <p className="country-name">{t(`countries.${countriesKeys[index]}`)}</p>
              </div>
            ))}
          </div>
          <div className="logo-row">
            {leftSideLogos.slice(Math.ceil(logosPerSide / 2)).map((logo, index) => (
              <div key={index + Math.ceil(logosPerSide / 2)} className="logo-item">
                <Image
                  src={logo}
                  alt={t(`countries.${countriesKeys[index + Math.ceil(logosPerSide / 2)]}`)}
                  width={100}
                  height={78}
                  style={{ objectFit: "contain" }}
                />
                <p className="country-name">
                  {t(`countries.${countriesKeys[index + Math.ceil(logosPerSide / 2)]}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Center North Logo */}
        <div className="north-logo">
          <Image src={northLogo} alt={t("logoAlt")} width={200} height={200} />
        </div>

        {/* Right Column */}
        <div className="logo-column">
          <div className="logo-row">
            {rightSideLogos.slice(0, Math.ceil(rightSideLogos.length / 2)).map((logo, index) => (
              <div key={index + logosPerSide} className="logo-item">
                <Image
                  src={logo}
                  alt={t(`countries.${countriesKeys[index + logosPerSide]}`)}
                  width={100}
                  height={78}
                  style={{ objectFit: "contain" }}
                />
                <p className="country-name">{t(`countries.${countriesKeys[index + logosPerSide]}`)}</p>
              </div>
            ))}
          </div>
          <div className="logo-row">
            {rightSideLogos.slice(Math.ceil(rightSideLogos.length / 2)).map((logo, index) => (
              <div
                key={index + logosPerSide + Math.ceil(rightSideLogos.length / 2)}
                className="logo-item"
              >
                <Image
                  src={logo}
                  alt={t(`countries.${countriesKeys[index + logosPerSide + Math.ceil(rightSideLogos.length / 2)]}`)}
                  width={100}
                  height={78}
                  style={{ objectFit: "contain" }}
                />
                <p className="country-name">
                  {t(`countries.${countriesKeys[index + logosPerSide + Math.ceil(rightSideLogos.length / 2)]}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <SocialMediaLinks />

      {/* Language Selector */}
      <div className="language-container">
        <label htmlFor="language-select">{t("selectLanguage", "Language:")}</label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </header>
  );
}
