import { Text, Flex, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
        m="2rem 0"
        zIndex="4"
        direction={{
          base: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Institution name="ufrn" />
        <Institution name="cod3r" />
        <Institution name="imd" />
      </Flex>
    </Flex>
  );
}
