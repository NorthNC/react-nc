import React from 'react';
import { SiTiktok, SiRumble, SiX } from 'react-icons/si';


const SocialMediaLinks = () => (
  <div className="social-links">
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <SiX />
    </a>
    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
      <SiTiktok />
    </a>
    <a href="https://rumble.com/" target="_blank" rel="noopener noreferrer" aria-label="Rumble">
      <SiRumble />
    </a>
  </div>
);

export default SocialMediaLinks;
