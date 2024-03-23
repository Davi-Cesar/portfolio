import { Flex, HStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { ActiveLink } from "./ActiveLink";
import { useInView } from "framer-motion";

export function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollingValue, setScrollingValue] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    function handleScroll() {
      setScrolling(window.scrollY > 100);
    }

    function handleScrollPosition() {
      setScrollingValue(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

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
    } else if (scrollingValue > 1800 && scrollingValue <= 3400) {
      return (
        <>
          <ActiveLink name="home" active />
          <ActiveLink name="skills" active />
          <ActiveLink name="works" active={false} />
          <ActiveLink name="about" active />
        </>
      );
    } else if (scrollingValue > 3400) {
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
      position={scrolling ? "fixed" : "relative"}
      maxWidth={"100%"}
      w={scrolling ? "100vw" : ""}
      h="5rem"
      px="5"
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
      transform={[scrolling ? "translate(-50%, -50%)" : ""]}
      opacity={isInView ? 1 : 0}
      ref={ref}
      transition={"opacity 1s, background .5s"}
    >
      <HStack
        as="nav"
        spacing={{ base: "20px", md: "100px", lg: "200px" }}
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
