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
  twitter: string;
  github: string;
};

export const CONFIG: Config = {
  defaultLanguate: "zh_CN",
  languages: [
    {
      resumeUrl: "/resume/resume_zh_CN.md",
      icon: "🇨🇳",
      description: "简体中文",
      language: "zh_CN",
    },
    {
      resumeUrl: "/resume/resume_en_US.md",
      icon: "🇺🇸",
      description: "English",
      language: "en_US",
    },
  ],
  mobile: "(+86)17623030229",
  email: "hlm52pk@163.com",
  twitter: "MrHeer5",
  github: "MrHeer",
};

export const LANGUAGE_MAP = CONFIG.languages.reduce(
  (map, option) => map.set(option.language, option),
  new Map<string, LanguageOption>()
);
