import { Box, Flex, HStack } from "@chakra-ui/react";

export function Header() {
  function scrollToBottom() {
    window.scrollTo(1, document.body.scrollHeight);
  }

  return (
    <Flex
      as="header"
      maxWidth={1400}
      h="5rem"
      px="6"
      align="center"
      justify="center"
      m="0 auto"
    >
      <HStack
        spacing={{ base: "50px", md: "100px", lg: "200px" }}
        fontWeight="bold"
        fontSize="14px"
        textAlign="center"
      >
        <Box
          as="a"
          cursor="pointer"
          p="10px"
          h="100%"
          color="cyan.600"
          _after={{
            content: "''",
            margin: "10px auto",
            display: "block",
            width: "15px",
            borderRadius: "100px",
            height: "4px",
            backgroundColor: "cyan.600",
          }}
        >
          Home
        </Box>
        <Box
          as="a"
          cursor="pointer"
          p="5px"
          h="100%"
          color="#e2f4ff"
          onClick={() => scrollToBottom()}
        >
          Skills
        </Box>
        <Box as="a" cursor="pointer" p="5px" h="100%" color="#e2f4ff">
          Works
        </Box>
        <Box as="a" cursor="pointer" p="5px" h="100%" color="#e2f4ff">
          About
        </Box>
      </HStack>
    </Flex>
  );
}
