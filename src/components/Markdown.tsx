import React, { useState, useEffect } from 'react';
import marked from 'marked';

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
    })

    const createMarkup = () => {
        return { __html: marked(markdown) }
    }
    return (<div dangerouslySetInnerHTML={createMarkup()} />);
}

export default Markdown;
