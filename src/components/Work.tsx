import { Text, Flex, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface WorkProps {
  name: string;
  color: string;
  image?: string;
  text: string;
  link: string;
}
export function Work({ name, color, image, text, link }: WorkProps) {
  return (
    <Flex
      as={motion.div}
      w={{ base: "100%", lg: "600px" }}
      alignItems="center"
      position="relative"
      bgGradient="linear(169.44deg, rgba(17, 40, 59, 0.181) 1.85%, rgba(48, 63, 90, 0.08) 98.72%)"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
      backdropBlur="60px"
      borderRadius="10px"
      flexWrap="wrap"
      initial={{ opacity: 0, x: -150 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      }}
      exit={{ opacity: 0, x: -150, transition: { duration: 0.5 } }}
      whileHover={{
        transform: "translateY(-10px)",
      }}
      _hover={{
        _after: {
          filter: "blur(25px)",
          width: "2rem",
          height: "2rem",
        },
      }}
      _after={{
        content: "''",
        position: "absolute",
        width: "1.5rem",
        height: "1.5rem",
        filter: "blur(15px)",
        left: "90%",
        right: "0",
        bottom: "0",
        top: "1",
        margin: "1rem",
        borderRadius: "10px",
        bg: `${color}`,

        transition: "filter 0.5s ease, height 0.5s ease, width 0.5s ease;",
        zIndex: 1,
      }}
    >
      <Box
        as="a"
        href={link}
        about={link}
        boxSize="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="1rem"
        borderRadius="10px"
      >
        <Flex flexDirection="column" w={image ? "60%" : "100%"}>
          <Text
            textAlign="left"
            fontSize="18px"
            p="1rem 0"
            textTransform="uppercase"
            letterSpacing=".2rem"
            fontWeight="medium"
            color={color}
            cursor="default"
          >
            {name}
          </Text>
          <Text
            textAlign="justify"
            fontSize="80%"
            w={image ? "100%" : "90%"}
            fontWeight="light"
            cursor="default"
          >
            {text}
          </Text>
        </Flex>

        {image ? (
          <Box
            w="10rem"
            h="2rem"
            display="flex"
            alignItems="center"
            margin="0 auto"
            bg="transparent"
            padding=".5rem"
            borderRadius="50%"
          >
            <Image
              margin="0 auto"
              src={`works/${image}`}
              alt="ufrn logo"
              objectFit="cover"
            />
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Flex>
  );
}
