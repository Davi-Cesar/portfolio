import React from "react";
import { Box, Flex, HStack, Image, Text, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { CodeHighlighter } from "@/components/CodeHighlighter";
import { Typewriter } from "@/components/Typewriter";
import Link from "next/link";
import { Connections } from "@/components/Connections";

export default function HomePage() {
  const animationKeyframesbluelight = keyframes`    
    0%    {transform:  translateX(150px)      translateY(50px)         }
    25%   {transform:  translateX(100px)      translateY(-150px)       } 
    50%   {transform:  translateX(-160px)     translateY(10px)         } 
    75%   {transform:  translateX(-100px)     translateY(150px)        }
    100%  {transform:  translateX(150px)      translateY(50px)         } 
  `;
  const animationKeyframesblue = keyframes`
    0%    {transform:  translateX(120px)      translateY(120px)          }
    50%   {transform:  translateX(-120px)     translateY(-150px)         } 
    100%  {transform:  translateX(120px)      translateY(120px)          } 
  `;
  const animationPonteirokeyframes = keyframes`
    0%    {opacity: 100%  }      
    100%  {opacity: 0%    } 
  `;
  const animationImagekeyframes = keyframes`
    0%    {transform:  translateY(0px)     }
    50%   {transform:  translateY(10px)    }
    100%  {transform:  translateY(0px)     }
  `;

  const animationbluelight = `${animationKeyframesbluelight} 13s ease-in-out infinite`;
  const animationblue = `${animationKeyframesblue} 15s ease-in-out infinite`;
  const animationPonteiro = `${animationPonteirokeyframes} 2s ease-in-out  infinite`;
  const animationImage = `${animationImagekeyframes} 5s ease-in-out  infinite`;

  const code = `
    import React from 'react';
    function  App() {
          <div>
              <h1>Hello, world!</h1>
          </div>
    } 
    export default App;`;

  return (
    <>
      <Flex
        direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
        h={{ base: "100%", md: "100%", lg: `calc(100vh - 5rem)` }}
        justify="space-between"
        align="center"
        p="2rem 0rem"
        id="home"
      >
        <Flex
          w={{ base: "10%", md: "10%", lg: "50%" }}
          h="100%"
          justify="center"
          align="center"
        >
          <Box
            borderRadius="100px 0 100px 0"
            bgColor="rgba(3, 9, 23, 0.096)"
            backdropFilter="auto"
            backdropBlur="30px"
            w={{ base: "100vw", md: "400px", lg: "400px" }}
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
              <CodeHighlighter code={code} language="javascript" />
            </Flex>
          </Box>
          <Box // Ball Ligth
            as={motion.div}
            animation={animationbluelight}
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
            animation={animationblue}
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
        <Flex w="50%" h="100%" justify="center" align="center">
          <Box w="400px">
            <Image
              as={motion.img}
              animation={animationImage}
              boxSize="220px"
              borderRadius="full"
              boxShadow="0 0 30px #021831"
              src="./perfil.jpg"
              alt="Davi César"
              objectFit="cover"
              align="top"
            />

            <Flex align="center" w="100%" width="100%" fontWeight="light">
              <Typewriter develop="Developer" />
              <Box
                as={motion.div}
                animation={animationPonteiro}
                _before={{
                  content: "''",
                  bg: "#2AA5EA",
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
              fontSize={{ base: "20px", lg: "24px" }}
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
                  <Box fontSize="1rem">
                    Resume
                    {/* <Connections connection={"Resume"} link="/resume.pdf" /> */}
                  </Box>
                </Link>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
