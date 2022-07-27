import { useAsync } from "react-use";
import { SkeletonText } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { useTwemoji } from "useTwemoji";

import { theme } from "./theme";
import "./style.css";

interface MarkdownProps {
  url: string;
}

function Markdown(props: MarkdownProps) {
  const { url } = props;
  const ref = useTwemoji<HTMLDivElement>();

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
