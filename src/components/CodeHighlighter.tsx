import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { Flex } from "@chakra-ui/react";

interface CodeHighlighterProps {
  code: string;
}

export function CodeHighlighter({ code }: CodeHighlighterProps) {
  const codeRef = useRef<HTMLDivElement>(null);
  hljs.registerLanguage("javascript", javascript);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [code]);

  return (
    <Flex justify="center" align="center" textAlign="justify" w="100%" h="100%">
      <pre>
        <code ref={codeRef} className={"language-javascript"}>
          {code}
        </code>
      </pre>
    </Flex>
  );
}
