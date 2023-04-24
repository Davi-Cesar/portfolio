import { Box, Flex, Image, Text, HStack, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SkillProps {
  image: string;
  name: string;
  exprerience: string;
}

export function SkillsExperience({ image, name, exprerience }: SkillProps) {
  return (
    <Flex
      as={motion.div}
      direction="column"
      w="150px"
      align="center"
      justify="center"
      p={{ base: "0rem", md: "1rem", lg: "1rem" }}
      fontSize="80%"
      whileHover={{ translateY: -20 }}
    >
      <Image
        src={`skills/${image}`}
        alt={image}
        w={{ base: "20%", md: "30%", lg: "50%" }}
        objectFit="contain"
        m="auto 0px "
      />
      <Box textAlign="center" p="15px 0">
        <Text>{name}</Text>
        <Text fontFamily="saira" opacity="50%">
          {exprerience}
        </Text>
      </Box>
    </Flex>
  );
}
