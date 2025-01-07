'use client'

// ScrollToTopButton.js
import styles from './ScrollToTop.module.css';

function ScrollToTopButton() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <button 
        className={styles.button} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <div className={styles.chevron}></div>
      </button>
    );
  }
  
  export default ScrollToTopButton;