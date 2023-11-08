import React from "react";

import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface connectionProps {
  connection: string;
  link: string;
}

export function Connections({ connection, link }: connectionProps) {
  return (
    <Link href={link} about="">
      <Box
        fontWeight="thin"
        _after={{
          content: "''",
          margin: "2px auto",
          display: "block",
          width: "0%",
          borderRadius: "100px",
          height: "2px",
          background: "gray.600",
          transition: "1s ease",
        }}
        _hover={{
          _after: {
            transition: "1s ease",
            width: "100%",
          },
        }}
      >
        {connection}
      </Box>
    </Link>
  );
}
