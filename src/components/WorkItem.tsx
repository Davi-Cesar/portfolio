import {
  GridItem,
  Box,
  Image,
  Text,
  Grid,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface WorkProps {
  image: string;
  name: string;
  text: string;
  number: number;
  link: string;
  work: string;
}

export function WorkItem({ link, number, image, name, text, work }: WorkProps) {
  const [isLargerThan1280] = useMediaQuery("(min-width: 780px)");
  return (
    <GridItem
      as={motion.div}
      h="350px"
      w="100%"
      bgColor="rgba(40, 40, 40, 0.055)"
      border="2px solid rgba(95, 95, 95, 0.075)"
      justifySelf="center"
      _hover={{
        boxShadow: "-10px 0 20px -10px #429aff",
        borderLeft: "2px solid #429aff",
      }}
    >
      <Grid
        display="grid"
        templateColumns={{
          base: "1fr",
          md: " 5% repeat(3, 1fr) 30%",
          lg: "5% repeat(3, 1fr) 40%",
        }}
        gap={{ base: "5px", lg: "10px" }}
        justifyItems="center"
        alignItems="center"
        w="100%"
        h="100%"
      >
        <Text fontSize="40px" color="gray.700" textAlign="left">
          {number}
        </Text>
        <Text fontSize="25px">{name}</Text>
        <Stack direction="column">
          <Text textAlign="center" fontWeight="light" color="gray.400">
            {text}
          </Text>
        </Stack>
        <Text textAlign="center" fontWeight="light" color="gray.400">
          {work}
        </Text>
        <Box
          boxSize="100%"
          overflow="hidden"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          _hover={{
            ".ballView": {
              zIndex: "1",
              transform: "scale(1.2)",
              transition: "transform 1s ease",
            },
            ".imgWork": {
              filter: "blur(1.2px)",
              transition: "filter 1s ease",
            },
          }}
        >
          <Box
            as="a"
            href={link}
            boxSize="80px"
            position="absolute"
            bg="blue.600"
            opacity="70%"
            borderRadius="100%"
            className="ballView"
            zIndex={isLargerThan1280 ? "0" : "1"}
            cursor="pointer"
            transition="transform 2s ease"
          >
            <Text
              position="relative"
              textAlign="center"
              lineHeight="100%"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              View
            </Text>
          </Box>

          <Image
            src={`works/${image}`}
            alt={name}
            boxSize={isLargerThan1280 ? "100%" : "100px"}
            objectFit="contain"
            objectPosition="cover"
            className="imgWork"
            filter={isLargerThan1280 ? "blur(0px)" : "blur(1px)"}
            transition="0.5s ease"
            opacity={isLargerThan1280 ? 1 : 0}
            _hover={{
              ".imgWork": {
                filter: "blur(1px)",
                transition: "filter 0.5s",
              },
            }}
          />
        </Box>
      </Grid>
    </GridItem>
  );
}
