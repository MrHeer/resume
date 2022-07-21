import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "./style.css";

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
      className="markdown-body"
      remarkPlugins={[remarkGfm]}
      linkTarget="_blank"
    >
      {markdown}
    </ReactMarkdown>
  );
}

export default Markdown;
