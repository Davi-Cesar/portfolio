import { Education } from "@/components/Education";
import { SkillsExperience } from "@/components/SkillsExperience";
import { Box, Flex, Text, HStack } from "@chakra-ui/react";

export default function Skills() {
  return (
    <>
      <Flex
        h="100%"
        w={{
          base: "100vw",
          md: "100%",
          lg: "100%",
        }}
        display="column"
        fontFamily="Saira"
        p={{
          base: "0rem",
          md: "4rem 0rem",
          lg: "4rem 0rem",
        }}
        id="skills"
      >
        <Box w="100%" h="auto">
          <Text
            as="h2"
            color="cyan.600"
            fontSize="64px"
            fontWeight="bold"
            textAlign="justify"
            p={{ base: "0rem 2rem", md: "0px", lg: "10px" }}
          >
            Skills
          </Text>
          <Box
            w={{ base: "100%", md: "100%", lg: "80%" }}
            h="100%"
            p={{ base: "0rem 2rem", md: "0px", lg: "1rem" }}
            fontWeight="light"
            mb="2rem"
            fontFamily="Outfit"
            color="gray.300"
          >
            <Text>
              Ao longo ultimos 5 anos aprendendo várias linguagens e
              desenvolvendo alguns projetos, com o objetivo de se me tornar um
              desenvolvedor Fullstack. A principal área da minha atuação é no
              desenvolvimento front-end, HTML, CSS, JS, TS, na criação de
              aplicativos Web.
            </Text>
            <Text p="2rem 0">
              Também tenho experiência com back-end apenas usando Spring e
              Postgres DB.
            </Text>
          </Box>
        </Box>

        <Flex
          w="100%"
          h="100%"
          justifyContent="space-between"
          fontFamily="comfortaa"
          position="relative"
          _before={{
            content: "''",
            position: "absolute",
            width: "10rem",
            height: "10rem",
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
            width: "10rem",
            height: "10rem",
            left: "auto",
            right: "0",
            bottom: "0",
            filter: "blur(90px)",
            bg: "#059bffc7",
            zIndex: 2,
          }}
        >
          <Flex
            w="100%"
            h="100%"
            direction={{
              base: "column",
              md: "column",
              lg: "row",
            }}
            align="center"
            justify="center"
            bgGradient="linear(169.44deg, rgba(58, 129, 191, 0.034) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)"
            border="2px solid #03365814"
            backdropFilter="auto"
            backdropBlur="60px"
            justifyContent="space-between"
            fontFamily="comfortaa"
            position="relative"
            p={{
              base: "0rem",
              md: "0rem,",
              lg: "4rem",
            }}
          >
            <Box h="100%" w="100%">
              <Flex h="10%" align="center" justify="center" p="2rem">
                <Text fontSize="18px">{"{ }"} Frontend Developer</Text>
              </Flex>
              <HStack
                direction={{
                  base: "column",
                  md: "column",
                  lg: "row",
                }}
                flexWrap="wrap"
                justify="center"
              >
                <SkillsExperience
                  image="/html.png"
                  name="HTML"
                  exprerience="Advanced"
                />
                <SkillsExperience
                  image="/css-3.png"
                  name="CSS"
                  exprerience="Advanced"
                />
                <SkillsExperience
                  image="/js.png"
                  name="JS"
                  exprerience="Intermediante"
                />
                <SkillsExperience
                  image="/typescript.png"
                  name="Typescript"
                  exprerience="Intermediante"
                />
                <SkillsExperience
                  image="/java.png"
                  name="Java"
                  exprerience="Intermediante"
                />
                <SkillsExperience
                  image="/react.png"
                  name="React"
                  exprerience="Intermediante"
                />
                <SkillsExperience
                  image="/git.png"
                  name="Git"
                  exprerience="Basic"
                />
                <SkillsExperience
                  image="/chakra-ui.png"
                  name="Chakra"
                  exprerience="Intermediante"
                />
              </HStack>
            </Box>

            <Box h="100%" w="100%">
              <Flex h="10%" align="center" justify="center" p="2rem">
                <Text fontSize="18px">{"."} Web Designer</Text>
              </Flex>
              <HStack
                direction={{
                  base: "column",
                  md: "column",
                  lg: "row",
                }}
                flexWrap="wrap"
                justify="center"
              >
                <SkillsExperience
                  image="/figma.png"
                  name="Figma"
                  exprerience="Intermediante"
                />
                <SkillsExperience
                  image="/photoshop.png"
                  name="Photoshop"
                  exprerience="Intermediante"
                />
                <SkillsExperience
                  image="/illustrator.png"
                  name="Illustrator"
                  exprerience="Basic"
                />
              </HStack>
              <Box h="100%" w="100%">
                <Flex h="15%" align="center" justify="center" p="2rem">
                  <Text fontSize="18px">{"</>"} Backend Developer</Text>
                </Flex>
                <HStack p="32px" flexWrap="wrap" justify="center">
                  <SkillsExperience
                    image="/postgres.png"
                    name="Postgres"
                    exprerience="Basic"
                  />
                  <SkillsExperience
                    image="/spring.png"
                    name="Spring"
                    exprerience="Basic"
                  />
                </HStack>
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Education />
      </Flex>
    </>
  );
}
