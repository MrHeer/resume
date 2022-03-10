import React, { useState, useMemo, useEffect } from "react";
import { marked } from "marked";
import "github-markdown-css";
import "./style";

interface MarkdownProps {
  filePath: string;
}

const Markdown: React.FC<MarkdownProps> = (props) => {
  const { filePath } = props;
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((res) => res.text())
      .then(setMarkdown)
      .catch(console.error);
  }, [filePath]);

  const innerMarkHTML = useMemo(() => {
    return { __html: marked(markdown) };
  }, [markdown]);

  return (
    <article
      className="markdown-body"
      dangerouslySetInnerHTML={innerMarkHTML}
    />
  );
};

export default Markdown;
