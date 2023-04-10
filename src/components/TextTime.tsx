import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface textProps {
  develop: string;
}

export function TextTime({ develop }: textProps) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);

  const writerWindows = (text: string, i: number) => {
    if (i === 0) {
      setText("" + text.at(i));
      setI(1);
    } else if (i > 0 && i < text.length) {
      setText((prevText) => (prevText += text.at(i)));
      setI((prev) => (prev += 1));
    }
  };

  useEffect(() => {
    setTimeout(() => writerWindows(develop, i), 150);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [writerWindows, i]);

  return (
    <>
      <Text fontSize="40px" p="15px 0" fontWeight="bold">
        {text}
      </Text>
    </>
  );
}
