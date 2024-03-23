import { Flex } from "@chakra-ui/react";

import { Institution } from "./Institution";
import { useInView } from "framer-motion";
import { useRef } from "react";
const listInstitutions = ["ufrn", "cod3r", "imd"];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
        ref={ref}
        transform={isInView ? "none" : "translateX(-200px)"}
        opacity={isInView ? 1 : 0}
        transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      >
        {listInstitutions.map((name, key) => (
          <Institution name={name} key={key} />
        ))}
      </Flex>
    </Flex>
  );
}
