import { Box, Flex, HStack } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { ActiveLink } from "./ActiveLink";

export function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollingValue, setScrollingValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    window.addEventListener("scroll", handleScrollPosition);
  }, [scrollingValue]);

  function handleScroll() {
    window.scrollY > 100 ? setScrolling(true) : setScrolling(false);
  }

  function handleScrollPosition() {
    const currentPosition = window.scrollY;
    setScrollingValue(currentPosition);
  }

  const nav = () => {
    if (scrollingValue <= 500) {
      return (
        <>
          <ActiveLink name="home" active={false} />
          <ActiveLink name="skills" active />
          <ActiveLink name="works" active />
          <ActiveLink name="about" active />
        </>
      );
    } else if (scrollingValue > 500 && scrollingValue <= 1800) {
      return (
        <>
          <ActiveLink name="home" active />
          <ActiveLink name="skills" active={false} />
          <ActiveLink name="works" active />
          <ActiveLink name="about" active />
        </>
      );
    } else if (scrollingValue > 1800 && scrollingValue <= 3500) {
      return (
        <>
          <ActiveLink name="home" active />
          <ActiveLink name="skills" active />
          <ActiveLink name="works" active={false} />
          <ActiveLink name="about" active />
        </>
      );
    } else if (scrollingValue > 3500) {
      return (
        <>
          <ActiveLink name="home" active />
          <ActiveLink name="skills" active />
          <ActiveLink name="works" active />
          <ActiveLink name="about" active={false} />
        </>
      );
    }
  };

  return (
    <Flex
      position={scrolling ? "fixed" : "-webkit-sticky"}
      maxWidth={"100%"}
      w={scrolling ? "100vw" : ""}
      h="5rem"
      px="5"
      //borderTop="1px solid #12192B"
      borderBottom="1px solid #12192B"
      align="center"
      justify="center"
      m="0 auto"
      zIndex={990}
      bg={scrolling ? "rgba(6, 22, 58, 0.233)" : ""}
      backdropFilter="auto"
      backdropBlur="15px"
      left={scrolling ? "50%" : ""}
      top={scrolling ? "4%" : ""}
      transform={scrolling ? "translate(-50%, -50%)" : ""}
      transition="background .8s"
    >
      <HStack
        as="nav"
        spacing={{ base: "30px", md: "100px", lg: "200px" }}
        display="flex"
        align="center"
        justify="center"
        fontSize="16px"
        textAlign="center"
      >
        {nav()}
      </HStack>
    </Flex>
  );
}
