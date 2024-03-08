import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}
export function Layout({ children }: ContainerProps) {
  return (
    <Flex p={{ base: "0 0%", md: "0 5%", lg: "0 10%" }} flexDirection="column">
      {children}
    </Flex>
  );
}
