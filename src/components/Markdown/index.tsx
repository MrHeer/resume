import { useAsync } from "react-use";
import { SkeletonText } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { theme } from "./theme";

import "./style.css";

interface MarkdownProps {
  url: string;
}

export function Markdown(props: MarkdownProps) {
  const { url } = props;

  const { value: markdown, loading } = useAsync(async () => {
    const response = await fetch(url);
    const text = response.text();
    return text;
  }, [url]);

  return (
    <SkeletonText
      isLoaded={!loading}
      p={[45, 45, 15]}
      noOfLines={50}
      spacing="5"
    >
      <ReactMarkdown
        components={ChakraUIRenderer(theme)}
        remarkPlugins={[remarkGfm]}
        linkTarget="_blank"
      >
        {markdown!}
      </ReactMarkdown>
    </SkeletonText>
  );
}

export default Markdown;
