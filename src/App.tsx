import { ChakraProvider, Container } from "@chakra-ui/react";

import { DownloadButton, Markdown } from "./components";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container
        minW={200}
        maxW={980}
        m="0 auto"
        p={[15, 15, 45]}
      >
        <Markdown url="/resume/resume.md" />
        <DownloadButton />
      </Container>
    </ChakraProvider>
  );
}

export default App;
