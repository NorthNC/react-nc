import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Load translations via HTTP
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: "en", // Default language
    supportedLngs: ["en", "fr"], // Supported languages
    backend: {
      loadPath: "/locales/{{ns}}.json", // Path to JSON files
    },
    ns: ["HeroCarousel", "NavBar", "NewsGrid", "About", "CookieConsent"], // Namespaces
    defaultNS: "common", // Optional: Specify a default namespace
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    debug: process.env.NODE_ENV === "development", // Debugging in development
  });

export default i18n;
