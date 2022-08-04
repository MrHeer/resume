import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { Config } from "config";
import { PUBLIC_URL } from "env";

export function initI18n(config: Config) {
  const LANGUAGE_KEYS = config.languages.map(({ languageKey }) => languageKey);
  i18n
    // load translation using http -> see /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      fallbackLng: config.defaultLanguageKey,
      supportedLngs: LANGUAGE_KEYS,
      backend: {
        loadPath: `${PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
      },

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });
}

export default i18n;
