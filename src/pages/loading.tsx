import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Loading() {
  const animationCirculokeyframes = keyframes`
  0%    {transform:  rotate(0deg) }
  100%  {transform:  rotate(360deg) }
`;

  const circulo = `${animationCirculokeyframes} 2s ease-in-out infinite`;
  return (
    <Box
      w="100vw"
      h="100vh"
      position="fixed"
      m="0"
      zIndex="5"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        as={motion.div}
        position="absolute"
        h="150px"
        w="150px"
        objectFit="cover"
        bottom="0"
        right="0"
        top="0"
        left="0"
        m="auto"
        //  filter="blur(2px)"
        border="1px solid #50505037"
        borderTop="2px solid #3a6efff9"
        borderBottom="2px solid #3a6efff9"
        borderRadius="50%"
        animation={circulo}
      />
    </Box>
  );
}
