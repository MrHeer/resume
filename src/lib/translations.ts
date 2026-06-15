import type { LanguageSlug } from "@/lib/config"

const en = {
  shareDialog: {
    share: "Share",
    resume: "Resume",
    vCard: "vCard",
  },

  personal: {
    firstName: "Linming",
    lastName: "He",
    jobTitle: "Senior Frontend Engineer",
  },

  error: {
    title: "Something went wrong",
    description:
      "An unexpected error occurred. Please try refreshing the page.",
  },

  notFound: {
    title: "404",
    description: "The requested page could not be found.",
  },

  palette: {
    call: {
      label: "Call",
      keywords: ["phone", "mobile", "call", "telephone"],
    },
    email: {
      label: "Send Email",
      keywords: ["email", "mail", "e-mail"],
    },
    github: {
      keywords: ["github", "code", "source", "repository", "sourcecode"],
    },
    x: {
      keywords: ["x", "twitter", "social", "contact"],
    },
    print: {
      label: "Print",
      keywords: ["print", "save"],
    },
    theme: {
      label: "Change Theme…",
      keywords: ["theme", "dark", "light"],
      toggle: {
        label: "Toggle Theme",
        keywords: ["toggle", "theme"],
      },
      light: {
        label: "Light Theme",
        keywords: ["light", "theme"],
      },
      dark: {
        label: "Dark Theme",
        keywords: ["dark", "theme"],
      },
    },
    language: {
      label: "Switch Language…",
      keywords: ["language", "i18n"],
    },
    sections: {
      navigation: "Navigation",
      commands: "Commands",
      preferences: "Preferences",
    },
    ui: {
      searchPlaceholder: "Type a command or search…",
      noResults: "No results found",
      noResultsHint: "Try searching with different keywords",
      back: "Back",
    },
  },
}

type TranslationShape = typeof en

export const translations = {
  "zh-CN": {
    shareDialog: {
      share: "分享",
      resume: "简历",
      vCard: "名片",
    },

    personal: {
      firstName: "林明",
      lastName: "何",
      jobTitle: "高级前端工程师",
    },

    error: {
      title: "出了点问题",
      description: "发生了意外错误，请尝试刷新页面。",
    },

    notFound: {
      title: "404",
      description: "找不到请求的页面。",
    },

    palette: {
      call: {
        label: "拨打电话",
        keywords: [...en.palette.call.keywords, "电话", "打电话"],
      },
      email: {
        label: "发送邮件",
        keywords: [...en.palette.email.keywords, "邮箱", "邮件"],
      },
      github: {
        keywords: [...en.palette.github.keywords, "代码", "源码", "仓库"],
      },
      x: {
        keywords: [...en.palette.x.keywords, "社交", "联系"],
      },
      print: {
        label: "打印",
        keywords: [...en.palette.print.keywords, "打印", "保存"],
      },
      theme: {
        label: "更换主题…",
        keywords: [...en.palette.theme.keywords, "主题", "深色", "浅色"],
        toggle: {
          label: "切换主题",
          keywords: [...en.palette.theme.toggle.keywords, "切换", "主题"],
        },
        light: {
          label: "浅色主题",
          keywords: [...en.palette.theme.light.keywords, "浅色", "亮色"],
        },
        dark: {
          label: "深色主题",
          keywords: [...en.palette.theme.dark.keywords, "深色", "暗色"],
        },
      },
      language: {
        label: "切换语言…",
        keywords: [
          ...en.palette.language.keywords,
          "语言",
          "国际化",
          "中文",
          "english",
        ],
      },
      sections: {
        navigation: "导航",
        commands: "命令",
        preferences: "偏好设置",
      },
      ui: {
        searchPlaceholder: "输入命令或搜索…",
        noResults: "没有找到结果",
        noResultsHint: "尝试使用不同的关键词搜索",
        back: "返回",
      },
    },
  },
  "en-US": en,
} as const satisfies Record<LanguageSlug, TranslationShape>
