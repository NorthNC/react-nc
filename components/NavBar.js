"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
        <li><Link href="/FAQ" onClick={closeMenu}>FAQ</Link></li>
        <li><Link href="/news" onClick={closeMenu}>Media</Link></li>
        <li><Link href="/support" onClick={closeMenu}>Supporters</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;