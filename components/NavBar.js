"use client";


import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="./FAQ">FAQ</Link></li>
        <li><Link href="./news">Media</Link></li>
        <li><Link href="./support">Supporters</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

