import { Box } from "@chakra-ui/react";
import { Markdown } from "../markdown";

export function Main() {
  return (
    <Box as="main" minW={200} maxW={980} m="0 auto" p={[15, 15, 45]}>
      <Markdown />
    </Box>
  );
}
