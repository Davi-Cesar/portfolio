import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ActiveLinkProps {
  name: string;
  active: boolean;
}

export function ActiveLink({ name, active }: ActiveLinkProps) {
  return (
    <>
      {active ? (
        <Box
          as="a"
          cursor="pointer"
          p="10px"
          m="0"
          h="100%"
          color="#e2f4ff"
          href={"#" + name}
          textTransform="capitalize"
        >
          {name}
        </Box>
      ) : (
        <Box
          as="a"
          cursor="pointer"
          p="10px"
          m="0"
          h="100%"
          color="cyan.600"
          href={"#" + name}
          textTransform="capitalize"
          _after={{
            content: "''",
            margin: "8px auto",
            display: "block",
            width: "6px",
            borderRadius: "100px",
            height: "4px",
            background: "cyan.600",
          }}
        >
          {name}
        </Box>
      )}
    </>
  );
}
