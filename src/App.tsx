import { ChakraProvider } from "@chakra-ui/react";

import { Header, Main } from "./components";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
    </ChakraProvider>
  );
}

export default App;
