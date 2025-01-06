"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const logos = [
  '/logos/danmark.png',
  '/logos/lettland.png',
  '/logos/norge.png',
  '/logos/sverige.png',
  '/logos/czech-republic.png',
  '/logos/estland.png',
  '/logos/litauen.png',
  '/logos/island.png',
  '/logos/finland.png',
  '/logos/gronland.png',
  '/logos/irland.png',
  '/logos/portugal.png',
  '/logos/uk.png',
  '/logos/malta.png',
  '/logos/belgium.png',
  '/logos/hungarian.png',


  
];

const countries = [
  'Denmark',
  'Latvia',
  'Norway',
  'Sweden',
  'Czech Republic',
  'Estonia',
  'Lithuania',
  'Iceland',
  'Finland',
  'Greenland',
  'Ireland',
  'Portugal',
  'UK',
  'Malta',
  'Belgium',
  'Hungary',
];

const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];

export default function Header() {
  const [language, setLanguage] = useState('English');

  const northLogo = '/logos/north-logo.png';
  const logosPerSide = Math.floor(logos.length / 2);
  const leftSideLogos = logos.slice(0, logosPerSide);
  const rightSideLogos = logos.slice(logosPerSide);

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-column">
          <div className="logo-row">
            {leftSideLogos.slice(0, Math.ceil(logosPerSide / 2)).map((logo, index) => (
              <div key={index} className="logo-item">
                <Image src={logo} alt={countries[index]} width={100} height={78} style={{ objectFit: 'contain' }} />
                <p className="country-name">{countries[index]}</p>
              </div>
            ))}
          </div>
          <div className="logo-row">
            {leftSideLogos.slice(Math.ceil(logosPerSide / 2)).map((logo, index) => (
              <div key={index + Math.ceil(logosPerSide / 2)} className="logo-item">
                <Image src={logo} alt={countries[index + Math.ceil(logosPerSide / 2)]} width={100} height={78} style={{ objectFit: 'contain' }} />
                <p className="country-name">{countries[index + Math.ceil(logosPerSide / 2)]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="north-logo">
          <Image src={northLogo} alt="North Logo" width={200} height={200} />
        </div>
        <div className="logo-column">
          <div className="logo-row">
            {rightSideLogos.slice(0, Math.ceil(rightSideLogos.length / 2)).map((logo, index) => (
              <div key={index + logosPerSide} className="logo-item">
                <Image src={logo} alt={countries[index + logosPerSide]} width={100} height={78} style={{ objectFit: 'contain' }} />
                <p className="country-name">{countries[index + logosPerSide]}</p>
              </div>
            ))}
          </div>
          <div className="logo-row">
            {rightSideLogos.slice(Math.ceil(rightSideLogos.length / 2)).map((logo, index) => (
              <div key={index + logosPerSide + Math.ceil(rightSideLogos.length / 2)} className="logo-item">
                <Image src={logo} alt={countries[index + logosPerSide + Math.ceil(rightSideLogos.length / 2)]} width={100} height={78} style={{ objectFit: 'contain' }} />
                <p className="country-name">{countries[index + logosPerSide + Math.ceil(rightSideLogos.length / 2)]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="language-dropdown">
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="language-dropdown"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>
    </header>
  );
}