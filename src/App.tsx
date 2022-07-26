import { ChakraProvider } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

import { Header, Main } from "./components";
import ErrorFallback from "./ErrorFallback";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header />
        <Main />
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
