"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/components/hooks/useTranslation";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const { t } = useTranslation("NavBar");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        ☰ 
      </button>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        <li><Link href="/" onClick={closeMenu}>{t("links.home", "Home")}</Link></li>
        <li><Link href="/FAQ" onClick={closeMenu}>{t("links.faq", "FAQ")}</Link></li>
        <li><Link href="/news" onClick={closeMenu}>{t("links.news", "Media")}</Link></li>
        <li><Link href="/support" onClick={closeMenu}>{t("links.supporters", "Supporters")}</Link></li>
        <li><Link href="/#aboutScroll" onClick={closeMenu}>{t("links.contact", "Contact")}</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
