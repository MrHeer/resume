export const LANGUAGES = ["en_US", "zh_CN"] as const;

export type Language = typeof LANGUAGES[number];

export type LanguageOption = {
  resumeUrl: URL;
  text: string;
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
      resumeUrl: new URL("/resume/resume_zh_CN.md"),
      text: "简体中文",
      language: "zh_CN",
    },
    {
      resumeUrl: new URL("/resume/resume_en_US.md"),
      text: "English(US)",
      language: "en_US",
    },
  ],
};
