import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SkillProps {
  image: string;
  name: string;
}

export function SkillsExperience({ image, name }: SkillProps) {
  return (
    <Flex
      as={motion.div}
      display="inline-flex"
      direction="column"
      w="120px"
      align="center"
      justify="center"
      paddingBlock="2rem"
      fontSize="80%"
      transition="1s"
      letterSpacing="0.1rem"
      whileHover={{ translateY: -20 }}
    >
      <Image
        src={`skills/${image}`}
        alt={image}
        w={{ base: "25%", md: "30%", lg: "50%" }}
        objectFit="contain"
      />
      <Box textAlign="center" fontSize="80%" p="5px 0">
        <Text>{name}</Text>
      </Box>
    </Flex>
  );
}
