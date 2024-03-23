import { Connections } from "@/components/Connections";
import { Box, Text, Flex, Image, keyframes } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const animationKeyframesblue = keyframes`
      0%, 100%{
    transform: translatey(0);
   
   border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  }
  50%{
    border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%;
    transform: translatey(-420%);
  }
  `;
  const circulo = `${animationKeyframesblue} 15s ease-in-out infinite`;
  const circulo2 = `${animationKeyframesblue} 15s ease infinite`;
  const circulo3 = `${animationKeyframesblue} 10s ease infinite`;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>;

  return (
    <>
      <Flex
        h="100%"
        w="100%"
        position="relative"
        direction="column"
        id="about"
        ref={ref}
        overflow="hidden"
        // borderRadius="0 0 100% 100%"
        // borderTop="solid 5px #429aff29"
        // borderBottom="solid 5px #429aff2d"
      >
        <Box
          as={motion.div}
          // borderRadius="10px"
          h="100%"
          w="100%"
          // bgColor="rgba(34, 34, 75, 0.116)"
          // bg="radial-gradient(ellipse at bottom, #1b27354c, rgba(9, 10, 15, 1));"
          backdropFilter="auto"
          backdropBlur="60px"
          backdropSaturate="100%"
          zIndex="2"
        >
          <Flex
            h={{ base: "100%", md: "100%", lg: `calc(100vh - 5rem)` }}
            justify="center"
            align="center"
            p=" 0rem"
            direction={{
              base: "column",
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
                transform={isInView ? "none" : "translateX(-5rem)"}
                opacity={isInView ? 1 : 0}
                transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              >
                <Text
                  as="h2"
                  color="cyan.600"
                  fontSize="32px"
                  fontWeight="regular"
                  textAlign="center"
                  w="100%"
                  p={{ base: "2rem", md: "2rem 10px", lg: "1rem 2rem" }}
                >
                  About Me
                </Text>
                <Image
                  as={motion.img}
                  // borderRadius="100%"
                  boxSize="250px"
                  objectFit="cover"
                  align="top"
                  boxShadow="0 0 40px black"
                  src="./perfil.webp"
                  alt="Davi César"
                />
                <Box p="1rem" textAlign="center">
                  <Text>Davi César de Araujo Bezerra</Text>

                  <Text>24 years old</Text>
                </Box>
                <Flex>
                  <Text color="gray.400">Natal, RN, Brasil</Text>
                </Flex>
                <Box textAlign="justify" color="gray.400">
                  <Text
                    fontSize="1rem"
                    w={{
                      base: "auto",
                      lg: "450px",
                    }}
                    p="2rem"
                  >
                    I am a computer technician for the internet, graduated in
                    Information Technology and studying with an emphasis on
                    Software Engineering, I work as a Front-End Developer.
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
              fontSize={{ base: "18px", lg: "28px" }}
              padding={{ base: "auto", lg: "2rem" }}
              transform={isInView ? "none" : "translateX(5rem)"}
              opacity={isInView ? 1 : 0}
              transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            >
              <Text color="cyan.600" p="2rem">
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
              <Connections connection={"Resume.pdf"} link="/resume.pdf" />
            </Flex>
          </Flex>
        </Box>

        <Box
          as={motion.div}
          position="absolute"
          h="200px"
          w="200px"
          objectFit="cover"
          right="1"
          bottom="0"
          left="0"
          m="auto"
          border="2px solid #50505037"
          filter="url(#goo)"
          bgColor="#3a6effc0"
          borderRadius="50%"
          opacity={isInView ? 1 : 0}
          transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          brightness="40%"
          animation={circulo}
        />
        <Box
          as={motion.div}
          position="absolute"
          h="150px"
          w="150px"
          objectFit="cover"
          right="0"
          bottom="0"
          left="5%"
          m="auto"
          border="2px solid #50505037"
          filter="url(#goo)"
          bgColor="#3a6effc0"
          borderRadius="50%"
          opacity={isInView ? 1 : 0}
          transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          brightness="40%"
          animation={circulo3}
        />
        <Box
          as={motion.div}
          position="absolute"
          h="200px"
          w="200px"
          objectFit="cover"
          right="-3%"
          filter="url(#goo)"
          bottom="0"
          left="0"
          m="auto"
          border="2px solid #50505037"
          bgColor="#3a6effc0"
          borderRadius="50%"
          opacity={isInView ? 1 : 0}
          transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          brightness="40%"
          animation={circulo2}
        />
      </Flex>
    </>
  );
}
