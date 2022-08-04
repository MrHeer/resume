import { resolveURL } from "utils";

export type LanguageOption = {
  resumeUrl: string;
  icon: string;
  description: string;
  language: string;
};

export type Config = {
  defaultLanguage: string;
  languages: Array<LanguageOption>;
  mobile: string;
  email: string;
  twitter?: string;
  github?: string;
};

export function getLanguageOption(language: string) {
  const { CONFIG } = window;
  const languageOption = CONFIG.languages.find(
    (option) => option.language === language
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
