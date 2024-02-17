import { Flex } from "@chakra-ui/react";

import { Institution } from "./Institution";

export function Education() {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      direction="column"
      fontFamily="Saira"
      position="relative"
    >
      <Flex
        w="100%"
        align="center"
        justify="space-evenly"
        p="2rem"
        direction={{ base: "column", lg: "row" }}
      >
        <Institution name="ufrn" />
        <Institution name="cod3r" />
        <Institution name="imd" />
      </Flex>
    </Flex>
  );
}
