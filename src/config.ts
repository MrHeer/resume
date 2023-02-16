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

export function getLanguageOption(languageKey: string) {
  const { CONFIG } = window;
  const languageOption = CONFIG.languages.find(
    (option) => option.languageKey === languageKey
  );
  if (languageOption !== undefined) {
    return languageOption;
  } else {
    return CONFIG.languages[0];
  }
}

export async function initConfig() {
  const configURL = resolveURL("config.json");
  const response = await fetch(configURL);
  const config: Config = await response.json();
  return config;
}
