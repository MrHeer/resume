import React, { useState, useMemo, useEffect } from "react";
import marked from "marked";
import "github-markdown-css";
import "./style";

interface MarkdownProps {
  filePath: string;
}

const Markdown: React.SFC<MarkdownProps> = (props) => {
  const { filePath } = props;
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((res) => {
        return res.text();
      })
      .then((cxt) => {
        setMarkdown(cxt);
      })
      .catch((reason) => {
        console.error(reason);
      });
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
