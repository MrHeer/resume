import { SkeletonText } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";
import { useTwemoji } from "hooks";
import { useTranslation } from "react-i18next";
import { useAsync } from "react-use";
import { resolveURL } from "utils";
import { getLanguageOption } from "config";
import { theme } from "./theme";

import "./style.css";

function Markdown() {
  const ref = useTwemoji<HTMLDivElement>();
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const url = resolveURL(getLanguageOption(currentLanguage).resumeUrl);

  const { value: markdown, loading } = useAsync(async () => {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  }, [url]);

  return (
    <SkeletonText
      isLoaded={!loading}
      p={loading ? [45, 45, 15] : undefined}
      noOfLines={50}
      spacing="5"
    >
      <div ref={ref}>
        <ReactMarkdown
          key={markdown}
          components={ChakraUIRenderer(theme)}
          remarkPlugins={[remarkGfm]}
          linkTarget="_blank"
        >
          {markdown!}
        </ReactMarkdown>
      </div>
    </SkeletonText>
  );
}

export default Markdown;
