import { resolveURL } from "utils";

export type Language = {
  resumeUrl: string;
  icon: string;
  description: string;
  languageKey: string;
};

export type Config = {
  defaultLanguageKey: string;
  languages: Array<Language>;
  mobile: string;
  email: string;
  twitter?: string;
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
