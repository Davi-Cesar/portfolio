import {
  GridItem,
  Box,
  Image,
  Text,
  useBreakpointValue,
  useMediaQuery,
  Grid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import Link from "next/link";
import { useState } from "react";
interface WorkProps {
  image: string;
  name: string;
  text: string;
  number: number;
  link: string;
  work: string;
}

export function WorkItem({ link, number, image, name, text, work }: WorkProps) {
  return (
    <GridItem
      as={motion.div}
      h="250px"
      w="100%"
      bgColor="rgba(3, 9, 23, 0.055)"
      border="2px solid rgba(95, 95, 95, 0.075)"
      justifySelf="center"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      _hover={{
        boxShadow: "-10px 0 20px -10px #429aff",
        borderLeft: "2px solid #429aff",
      }}
    >
      <Grid
        display="grid"
        templateColumns="5% repeat(3, 1fr) 40%"
        gap="10px"
        justifyItems="center"
        alignItems="center"
        w="100%"
        h="100%"
      >
        <Text fontSize="40px" color="gray.700">
          {number}
        </Text>
        <Text fontSize="25px">{name}</Text>
        <Text textAlign="center" fontWeight="light" color="gray.400">
          {text}
        </Text>
        <Text textAlign="center" fontWeight="light" color="gray.400">
          {work}
        </Text>
        <Box
          boxSize="100%"
          overflow="hidden"
          position="relative"
          bg="red.100"
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
            boxSize="100%"
            objectFit="cover"
            objectPosition="cover"
            className="imgWork"
            filter="blur(0px)"
            transition="0.5s ease"
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
