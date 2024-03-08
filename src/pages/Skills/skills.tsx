import { Education } from "@/components/Education";
import { InfiniteLoop } from "@/components/InfiniteLoopSlider";

import { Box, Flex, Text } from "@chakra-ui/react";
import { ContainerScrollIfinite } from "@/components/ContainerScrollIfinite";
import skillsData from "../../services/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Flex
      h="100%"
      w="100%"
      display="column"
      fontFamily="Saira"
      p={{
        base: "0rem",
        lg: "4rem 0rem",
      }}
      id="skills"
    >
      <Box
        w="100%"
        as={motion.div}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ durantion: "2s" }}
      >
        <Text as="h2" color="cyan.600" fontWeight="bold" textAlign="justify">
          Skills
        </Text>
        <Box
          w={{ md: "100%", lg: "80%" }}
          h="100%"
          p={{ base: "0rem 2rem", md: "0px", lg: "1rem" }}
          fontWeight="light"
          mb="2rem"
          fontFamily="Outfit"
          color="gray.300"
        >
          <Text>
            Over the last 5 years learning several languages ​​and developing
            some personal and college projects, with the aim of becoming a
            Fullstack developer. The main area of ​​my work is front-end
            development, HTML, CSS, JS, TS, creating Web applications.
          </Text>
          <Text p="2rem 0">
            I have experience with back-end using Spring and Postgres DB.
          </Text>
        </Box>
      </Box>
      <Flex
        as={motion.div}
        boxSize="100%"
        p={{ md: "0rem", lg: "4rem" }}
        justifyContent="center"
        fontFamily="comfortaa"
        alignItems="center"
        flexDirection="column"
        position="relative"
        bgGradient="linear(169.44deg, rgba(58, 129, 191, 0.034) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)"
        border="1px solid #03365814"
        borderRadius={{ base: "10px", lg: "100px 0 100px 0" }}
        backdropFilter="auto"
        backdropBlur="60px"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ durantion: "2s" }}
        _before={{
          content: "''",
          position: "absolute",
          width: "5rem",
          height: "5rem",
          left: "0",
          top: "0",
          right: "0",
          bottom: "0",
          filter: "blur(90px)",
          bg: "#663bffc9",
          zIndex: 2,
        }}
        _after={{
          content: "''",
          position: "absolute",
          width: "5rem",
          height: "5rem",
          left: "auto",
          right: "0",
          bottom: "0",
          filter: "blur(90px)",
          bg: "#059bffc7",
          zIndex: 2,
        }}
      >
        <Text
          fontWeight="medium"
          fontSize="100%"
          fontFamily="Saira"
          color="white.50"
          letterSpacing=".1rem"
        >
          <code>&lt;&gt; Experiências &lt;/&gt;</code>
        </Text>
        <ContainerScrollIfinite>
          <InfiniteLoop
            reverse={false}
            speed={"27s"}
            listSkills={skillsData.skillsSliceOne}
          />
        </ContainerScrollIfinite>
        <ContainerScrollIfinite>
          <InfiniteLoop
            reverse={true}
            speed={"33s"}
            listSkills={skillsData.skillsSliceTwo}
          />
        </ContainerScrollIfinite>
      </Flex>
      <Education />
    </Flex>
  );
}
