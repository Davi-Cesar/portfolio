import { Education } from "@/components/Education";
import { InfiniteLoop } from "@/components/InfiniteLoopSlider";

import { Box, Flex, Text } from "@chakra-ui/react";
import { ContainerScrollIfinite } from "@/components/ContainerScrollIfinite";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import skillsData from "../../services/skills";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Flex
      as="section"
      h="100%"
      w="100%"
      display="column"
      fontFamily="Saira"
      p={{
        base: "0rem 1rem",
        lg: "4rem",
      }}
      scrollSnapAlign="start"
      id="skills"
    >
      <Box
        as={motion.div}
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="left"
        p={{ base: "0rem", lg: "0rem" }}
        ref={ref}
        transform={isInView ? "none" : "translateX(-200px)"}
        opacity={isInView ? 1 : 0}
        transition="all 0.5s"
      >
        <Text as="h2" color="cyan.600" fontWeight="bold" p="0">
          Skills
        </Text>
        <Box
          w={{ base: "100%", lg: "60%" }}
          h="100%"
          p={{ md: "0px", lg: "10px" }}
          fontWeight="light"
          mb="2rem"
          fontFamily="Outfit"
          color="gray.300"
          textAlign="justify"
        >
          <Text>
            Over the last 5 years learning several languages ​​and developing
            some personal and college projects, with the aim of becoming a
            Fullstack developer. The main area of ​​my work is front-end
            development, HTML, CSS, JS, TS, creating Web applications. I have
            experience with back-end using Spring and PostgresDB.
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
        ref={ref}
        opacity={isInView ? 1 : 0}
        transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
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
