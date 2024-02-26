import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerScrollIfiniteProps {
  children: ReactNode;
}
export function ContainerScrollIfinite({
  children,
}: ContainerScrollIfiniteProps) {
  return (
    <Box
      className="scroll"
      display="flex"
      position="relative"
      w="70%"
      overflow="hidden"
      css={{
        WebkitMask:
          "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
      }}
    >
      {children}
    </Box>
  );
}
