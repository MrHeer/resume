import config from "config.json";

export const LANGUAGES = ["en_US", "zh_CN"] as const;

export type Language = typeof LANGUAGES[number];

export type LanguageOption = {
  resumeUrl: string;
  icon: string;
  description: string;
  language: Language;
};

export type Config = {
  defaultLanguate: Language;
  languages: Array<LanguageOption>;
  mobile: string;
  email: string;
  twitter?: string;
  github?: string;
};

export const CONFIG: Config = config as Config;

export const LANGUAGE_MAP = CONFIG.languages.reduce(
  (map, option) => map.set(option.language, option),
  new Map<string, LanguageOption>()
);
