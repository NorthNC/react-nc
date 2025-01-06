"use client";

import styles from '/styles/NewsTicker.css';

import React, { useEffect, useRef } from 'react';

const NewsTicker = () => {
  const ulRef = useRef(null);

  useEffect(() => {
    const ul = ulRef.current;
    const liElements = ul.querySelectorAll('li');

    // Calculate the total width of all list items
    let totalWidth = 0;
    liElements.forEach(li => {
      totalWidth += li.offsetWidth;
    });

    // Adjust the list width
    ul.style.width = `${totalWidth}px`;

    // Adjust the animation
    const keyframes = [
      { transform: 'translateX(100%)' },
      { transform: `translateX(-${totalWidth}px)` }
    ];

    const animationOptions = {
      duration: 40000, // Duration of the animation in milliseconds
      iterations: Infinity, // Loop the animation
      easing: 'linear' // Linear movement
    };

    // Apply the animation using the Web Animations API
    const animation = ul.animate(keyframes, animationOptions);

    // Prevent user from scrolling the container
    ul.parentElement.addEventListener('wheel', function(e) {
      e.preventDefault();
    }, { passive: false });

    ul.parentElement.addEventListener('touchmove', function(e) {
      e.preventDefault();
    }, { passive: false });

    // Optionally, if you want to keep the animation paused when interacted with:
    let isPaused = false;
    ul.parentElement.addEventListener('mouseenter', function() {
      if (!isPaused) {
        animation.pause();
        isPaused = true;
      }
    });

    ul.parentElement.addEventListener('mouseleave', function() {
      if (isPaused) {
        animation.play();
        isPaused = false;
      }
    });

  }, []);

  return (
    <div className="news-container">
      <div className="title">
        <h1 className="translate">Latest News</h1>
      </div>
      <ul id="scrollable-list" ref={ulRef}>
        <li>
          <p><strong>Nicolas Hulscher: </strong><a href="https://www.riksdagen.se/sv/webb-tv/video/interpellationsdebatt/atgarder-for-att-minimera-skador-fran-mrna-vaccin_hc10222/" target="_blank" rel="noopener noreferrer">BREAKING - New Study Demands Immediate Moratorium on COVID-19 mRNA Injections</a></p>
        </li>
        <li>
          <p><strong>Malue Montclairre: </strong><a href="https://x.com/MMontclairre/status/1861094551869419572" target="_blank" rel="noopener noreferrer"><em>Viral: International experts call for immediate suspension of COVID-19 modified mRNA vaccines</em></a></p>
        </li>
        <li>
          <p><strong>Breaking: </strong><a href="https://northgroup.info/pdfs/press_release_uk.pdf" target="_blank" rel="noopener noreferrer"><em>28th November 2024 – 11 for 11 - Ireland joins NORTH Group</em></a></p>
        </li>
        <li>
          <p><strong>Breaking: </strong><a href="https://www.worldcouncilforhealth.org/world-council-for-health-joins-10-nordic-and-baltic-countries-in-calling-for-immediate-suspension-of-the-covid-19-mrna-vaccines/" target="_blank" rel="noopener noreferrer"><em>World Council for Health joins NORTH Group</em></a></p>
        </li>
        <li>
          <p><strong>Live: </strong><a href="https://www.ft.dk/Aktuelt/webtv/video/20241/salen/30.aspx" target="_blank" rel="noopener noreferrer"><em>Lars Boje Mathiesen ask questions to health minister Sophie Loehde regarding c-19 vaccine.</em></a></p>
        </li>
      </ul>
    </div>
  );
};

export default NewsTicker;