'use client'

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/context/LanguageContext";

export const useTranslation = (componentName) => {
  const { language, changeLanguage } = useLanguage(); // Access global language state
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${componentName}.json`);
        const data = await response.json();
        setTranslations(data[language] || {});
      } catch (error) {
        console.error(`Error loading translations for ${componentName}:`, error);
      }
    };

    loadTranslations();
  }, [language, componentName]);

  const t = (key, fallback = "") => {
    return key.split(".").reduce((obj, segment) => obj?.[segment] ?? fallback, translations);
  };

  return { t, language, changeLanguage };
};
