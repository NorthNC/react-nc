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
        <li><Link href="/news" onClick={closeMenu}>{t("links.news", "Media")}</Link></li>
        <li><Link href="/support" onClick={closeMenu}>{t("links.supporters", "Supporter")}</Link></li>
        <li><Link href="/legal" onClick={closeMenu}>{t("links.legal", "Legal")}</Link></li>
        <li><Link href="/pressreleases" onClick={closeMenu}>{t("links.facts", "Facts")}</Link></li>
        <li><Link href="/pressreleases" onClick={closeMenu}>{t("links.press", "Press Release")}</Link></li>
        <li><Link href="/about" onClick={closeMenu}>{t("links.contact", "About")}</Link></li>
        <li><Link href="/FAQ" onClick={closeMenu}>{t("links.faq", "Official Responses")}</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
