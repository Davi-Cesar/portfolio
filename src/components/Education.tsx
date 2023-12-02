import { Text, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Education() {
  return (
    <Flex
      w="100%"
      h="100%"
      m="2rem 0 0"
      align="center"
      direction="column"
      fontFamily="Saira"
      position="relative"
    >
      <Text fontSize="32px" fontWeight="Bold" color="cyan.600">
        EDUCATION
      </Text>
      <Flex
        w="100%"
        align="center"
        justify="center"
        bgGradient="linear(169.44deg, rgba(58, 129, 191, 0.034) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)"
        border="2px solid #03365814"
        p="2rem"
        m="2rem 0"
        zIndex="4"
        direction={{
          base: "column",
          md: "column",
          lg: "row",
        }}
      >
        <Link href={"https://www.ufrn.br/"} passHref>
          <Flex
            as={motion.div}
            boxSize="10rem"
            m="50 auto"
            p="1rem"
            margin="auto 1rem"
            whileHover={{ scale: 1.2, translateY: -20 }}
          >
            <Image
              src="/education/ufrn.png"
              alt="ufrn logo"
              objectFit="contain"
            />
          </Flex>
        </Link>
        <Link href={"https://www.metropoledigital.ufrn.br/portal/"} passHref>
          <Flex
            as={motion.div}
            boxSize="10rem"
            m="50 auto"
            margin="auto 2rem"
            p="1rem"
            whileHover={{ scale: 1.2, translateY: -20 }}
          >
            <Image
              src="/education/imd.png"
              alt="imd logo"
              objectFit="contain"
            />
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
}
