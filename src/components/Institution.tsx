import { Text, Flex, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface InstitutionProps {
  name: string;
}
export function Institution({ name }: InstitutionProps) {
  return (
    <Flex
      as={motion.div}
      w="200px"
      alignItems="center"
      justifyContent="center"
      whileHover={{ filter: "brightness(0.8)" }}
      bgGradient="linear(169.44deg, rgba(58, 129, 191, 0.034) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)"
      borderRadius="10px"
      p="1rem"
    >
      <Box
        boxSize="50px"
        display="flex"
        alignItems="center"
        margin="0 auto"
        bg="transparent"
        padding=".5rem"
        borderRadius="50%"
      >
        <Image
          margin="0 auto"
          src={`./education/${name}.png`}
          alt="ufrn logo"
          objectFit="cover"
        />
      </Box>
      <Text
        fontWeight="regular"
        w="60%"
        textAlign="center"
        fontSize="22px"
        textTransform="uppercase"
      >
        {name}
      </Text>
    </Flex>
  );
}
