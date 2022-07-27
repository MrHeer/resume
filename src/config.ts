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
};
