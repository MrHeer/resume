import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

interface MarkdownProps {
  url: string;
}

export function Markdown(props: MarkdownProps) {
  const { url } = props;
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setMarkdown)
      .catch(console.error);
  }, [url]);

  return (
    <ReactMarkdown
      components={ChakraUIRenderer()}
      remarkPlugins={[remarkGfm]}
      linkTarget="_blank"
    >
      {markdown}
    </ReactMarkdown>
  );
}

export default Markdown;
