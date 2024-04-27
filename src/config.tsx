import { createContext, ReactNode, useContext } from "react";
import { useTranslation } from "react-i18next";
import { resolveURL } from "utils";

export type Language = {
  resumeUrl: string;
  icon: string;
  description: string;
  languageKey: string;
};

export type Config = {
  /**
   * @description language to use if translations in user language are not available.
   */
  fallbackLanguageKey: string;
  languages: Array<Language>;
  mobile: string;
  email: string;

  /**
   * @description your username of Twitter
   */
  twitter?: string;

  /**
   * @description your username of GitHub
   */
  github?: string;
};

export async function fetchConfig() {
  const configURL = resolveURL("config.json");
  const response = await fetch(configURL);
  const config: Config = await response.json();
  return config;
}

const ConfigContext = createContext<Config>(null!);

export function ConfigProvider({
  config,
  children,
}: {
  config: Config;
  children: ReactNode;
}) {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}

export function useConfig() {
  return useContext(ConfigContext);
}

export function useCurrentLanguage() {
  const {
    i18n: { language: currentLanguageKey },
  } = useTranslation();
  const { languages } = useConfig();

  const language = languages.find(
    (option) => option.languageKey === currentLanguageKey
  );
  if (language !== undefined) {
    return language;
  } else {
    return languages[0];
  }
}
