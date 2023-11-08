import {
  Flex,
  GridItem,
  Box,
  Image,
  Text,
  HStack,
  useBreakpointValue,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import Link from "next/link";
interface WorkProps {
  image: string;
  name: string;
  text: string;
  number: number;
  link: string;
}

export function WorkItem({ link, number, image, name, text }: WorkProps) {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <GridItem
      as={motion.div}
      rowSpan={2}
      colSpan={1}
      h="100%"
      p="2rem"
      w="100%"
      bgColor="rgba(3, 9, 23, 0.055)"
      border="2px solid rgba(95, 95, 95, 0.075)"
      borderRadius="20px"
      backdropFilter="auto"
      backdropBlur="40px"
      justifySelf="center"
      whileHover={{
        boxShadow: "-10px 0 20px -10px #429aff",
        borderLeft: "2px solid #429aff",
      }}
    >
      {isLargerThan1280 ? (
        <HStack spacing="24px">
          <Box w={{ base: "100%", sm: "100%", md: "20%" }} h="100%" m="0 auto">
            <Text fontWeight="thin" fontSize="50px" color="gray.700">
              {number}
            </Text>
          </Box>
          <Box w="100%" h="100%" m="0 auto" flexDirection="column">
            <Image
              src={`works/${image}`}
              boxSize="220px"
              alt="cecane"
              objectFit="contain"
              overflow="hidden"
            />
          </Box>
          <Flex
            direction="column"
            justifyContent="center"
            w="100%"
            h="100%"
            m="0 auto"
          >
            <Text textTransform="uppercase">{name}</Text>
            <Text fontSize="1rem" color="gray.500">
              {text}
            </Text>
            <Link href={link}>
              <Text
                marginTop="1rem"
                fontSize="1rem"
                color="#429aff"
                fontWeight="medium"
                _hover={{ letterSpacing: "5px" }}
                transition="letter-spacing 1s ease"
              >
                View
              </Text>
            </Link>
          </Flex>
        </HStack>
      ) : (
        <Stack spacing="24px">
          <Box w={{ base: "100%", sm: "100%", md: "20%" }} h="100%" m="0 auto">
            <Text fontWeight="thin" fontSize="50px" color="gray.700">
              {number}
            </Text>
          </Box>
          <Box
            w="100%"
            h="100%"
            m="0 auto"
            flexDirection="column"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={`works/${image}`}
              boxSize="220px"
              alt="cecane"
              objectFit="contain"
              overflow="hidden"
            />
          </Box>
          <Flex
            // bg="blue.300"
            direction="column"
            justifyContent="center"
            w="100%"
            h="100%"
            m="0 auto"

            //overflow="hidden"
          >
            <Text textTransform="uppercase">{name}</Text>
            <Text fontSize="1rem" color="gray.500">
              {text}
            </Text>
            <Link href={link}>
              <Text
                marginTop="1rem"
                fontSize="1rem"
                color="#429aff"
                fontWeight="medium"
                _hover={{ letterSpacing: "5px" }}
                transition="letter-spacing 1s ease"
              >
                View
              </Text>
            </Link>
          </Flex>
        </Stack>
      )}
    </GridItem>
  );
}
