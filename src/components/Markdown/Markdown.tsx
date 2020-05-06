import React, { useState, useEffect } from 'react';
import marked from 'marked';
import 'github-markdown-css';
import './style'

interface MarkdownProps {
    filePath: string;
}

const Markdown: React.SFC<MarkdownProps> = (props) => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(props.filePath).then(res => {
            return res.text();
        }).then(cxt => {
            setMarkdown(cxt);
        }).catch(reason => {
            console.error(reason);
        });
    }, [props.filePath])

    const createMarkup = () => {
        return { __html: marked(markdown) }
    }

    return (<article className="markdown-body" dangerouslySetInnerHTML={createMarkup()} />);
}

export default Markdown;
