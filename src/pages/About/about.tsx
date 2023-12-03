import { Connections } from "@/components/Connections";
import { Box, Text, Flex, chakra, Image, keyframes } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

export default function About() {
  const animationCirculokeyframes = keyframes`
  0%    {transform:  rotate(0deg)     }
  100%  {transform:  rotate(360deg)     }
`;

  const circulo = `${animationCirculokeyframes} 2s ease-in-out infinite`;

  return (
    <>
      <Flex h="100%" w="100%" position="relative" direction="column" id="about">
        <Box
          borderRadius="10px"
          h="100%"
          w="100%"
          bgColor="rgba(0, 0, 0, 0.089)"
          backdropFilter="auto"
          backdropBlur="8px"
          backdropSaturate="100%"
          zIndex="2"
        >
          <Text
            as="h2"
            color="cyan.600"
            fontSize="50px"
            fontWeight="bold"
            textAlign="justify"
            p={{ base: "2rem", md: "2rem 10px", lg: "1rem 2rem" }}
          >
            About Me
          </Text>
          <Flex
            h={{ base: "100%", md: "100%", lg: `calc(100vh - 5rem)` }}
            justify="center"
            align="center"
            p="2rem 0rem"
            direction={{
              base: "column",
              md: "column",
              lg: "row",
            }}
          >
            <Flex
              w="100%"
              h="100%"
              justify="center"
              align="center"
              direction="column"
            >
              <Box
                w="100%"
                h="100%"
                textAlign="justify"
                margin="0 auto"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Image
                  as={motion.img}
                  // borderRadius="100%"
                  boxSize="250px"
                  objectFit="cover"
                  align="top"
                  boxShadow="0 0 40px black"
                  src="./perfil.jpg"
                  alt="Davi César"
                />
                <Box p="1rem" textAlign="center">
                  <Text>Davi César de Araujo Bezerra</Text>

                  <Text>24 years old</Text>
                </Box>
                <Flex>
                  <Image src="./marker.svg" alt="marker" p="5px" />
                  <Text color="gray.400">Natal, RN, Brasil</Text>
                </Flex>
                <Box textAlign="justify" color="gray.400">
                  <Text
                    fontSize="1rem"
                    w={{
                      base: "auto",
                      md: "450px",
                      lg: "450px",
                    }}
                    p="2rem"
                  >
                    I am a computer technician for the internet and graduated in
                    Information Technology with an emphasis on Software
                    engineering, I work as a Front-End Developer.
                  </Text>
                </Box>
              </Box>
            </Flex>

            <Flex
              w="100%"
              h="400px"
              direction="column"
              align="center"
              justifyContent="center"
              textAlign="center"
              fontSize={{ base: "28px", lg: "32px" }}
              padding={{ base: "auto", lg: "2rem" }}
            >
              <Text color="cyan.500" p="2rem">
                Keep in touch
              </Text>

              <Connections connection={"davicesar2515@gmail.com"} link="" />
              <Connections
                connection={"My projects on Github"}
                link="https://github.com/Davi-Cesar"
              />
              <Connections
                connection={"My Linkedin"}
                link="https://www.linkedin.com/in/davi-c%C3%A9sar-740700166/"
              />
              <Connections
                connection={"Resume.pdf"}
                link="https://www.linkedin.com/in/davi-c%C3%A9sar-740700166/"
              />
            </Flex>
          </Flex>
        </Box>

        <Box
          as={motion.div}
          position="absolute"
          h="200px"
          w="200px"
          objectFit="cover"
          bottom="0"
          right="0"
          top="0"
          left="0"
          m="auto"
          border="2px solid #50505037"
          borderTop="10px solid #3a6efff9"
          borderRadius="50%"
          brightness="40%"
          filter="auto"
          animation={circulo}
        />
      </Flex>
    </>
  );
}
