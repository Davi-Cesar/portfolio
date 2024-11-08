import React, { useRef } from "react";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

import { CodeHighlighter } from "@/components/CodeHighlighter";
import { Typewriter } from "@/components/Typewriter";
import Link from "next/link";
import { code } from "../../services/animations";
import animations from "../../services/animations";

export default function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Flex
        direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
        h={`calc(100vh - 5rem)`}
        justify="space-between"
        align="center"
        p="4rem 0rem"
        id="home"
        ref={ref}
      >
        <Flex
          as={motion.div}
          w={{ base: "10%", md: "10%", lg: "50%" }}
          h="100%"
          display={{ base: "none", lg: "flex" }}
          justify="center"
          align="center"
          transform={isInView ? "none" : "translateX(-5rem)"}
          opacity={isInView ? 1 : 0}
          transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        >
          <Box
            borderRadius="100px 0 100px 0"
            bgColor="rgba(3, 9, 23, 0.096)"
            backdropFilter="auto"
            backdropBlur="30px"
            w={{ base: "100vw", lg: "400px" }}
            h={{ base: "100%", md: "400px", lg: "450px" }}
            zIndex="3"
            textAlign="justify"
            margin="0 auto"
            overflow="visible"
          >
            <Flex
              align="center"
              justify="center"
              h="400px"
              color="white"
              p="50px"
            >
              <CodeHighlighter code={code} />
            </Flex>
          </Box>
          <Box // Ball Ligth
            as={motion.div}
            animation={animations.animationbluelight}
            position="absolute"
            padding="2"
            bg="#83defa" //#20d2d8"
            width="120px"
            height="120px"
            borderRadius="100%"
            display="flex"
            zIndex="1"
            boxShadow="0 0 20px #83defa"
          />
          <Box // Ball Dark
            as={motion.div}
            animation={animations.animationblue}
            position="absolute"
            padding="2"
            bg="cyan.600"
            width="120px"
            height="120px"
            borderRadius="100%"
            display="flex"
            zIndex="2"
          />
        </Flex>
        <Flex
          as={motion.div}
          w="50%"
          h="100%"
          justify="center"
          align={{ base: "center", md: "center", lg: "left" }}
          transform={isInView ? "none" : "translateX(5rem)"}
          opacity={isInView ? 1 : 0}
          transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        >
          <Box w="400px" p="1rem">
            <Flex
              as="article"
              justifyContent={{ base: "center", md: "center", lg: "left" }}
              w="100%"
            >
              <Box
                as={motion.div}
                animation={animations.animationImage}
                boxSize="220px"
                overflow="hidden"
                borderRadius="50%"
                boxShadow="0 0 30px #021831"
              >
                <Image
                  boxSize="220px"
                  src="./perfil.webp"
                  alt="Davi César"
                  objectFit="cover"
                  align="top"
                />
              </Box>
            </Flex>
            <Flex
              align="center"
              justifyContent={{ base: "center", md: "center", lg: "left" }}
              w="100%"
              width="100%"
              fontWeight="light"
            >
              <Typewriter develop="Developer" />

              <Box
                as={motion.div}
                animation={animations.animationPonteiro}
                _before={{
                  content: "''",
                  bg: "#429aff",
                  color: "cyan.600",
                  borderTop: "4px solid",
                  borderBottom: "10px solid",
                  borderLeft: "10px solid",
                  marginLeft: 2,
                }}
              />
            </Flex>

            <Box
              fontFamily="Outfit"
              fontSize={{ base: "18px", lg: "22px" }}
              color="white"
              textAlign={{ base: "center", md: "center", lg: "left" }}
              fontWeight="light"
            >
              Hi, I am{" "}
              <Text as="span" color="cyan.600" fontWeight="medium">
                Davi César
              </Text>
              , I am frontend developer in search of the full stack.
              <HStack
                spacing="12px"
                m="2rem auto"
                w="100%"
                justify={{ base: "center", md: "center", lg: "left" }}
              >
                <Link href="https://github.com/Davi-Cesar" target="_black">
                  <Image src="github.png" alt="github" boxSize={5} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/davi-c%C3%A9sar-740700166/"
                  target="_black"
                >
                  <Image src="linkedin.png" alt="linkedin" boxSize={5} />
                </Link>
                <Link href="/resume.pdf" target="_black">
                  <Box fontSize="1rem">Resume ↗</Box>
                </Link>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
