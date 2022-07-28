import { ChakraProvider, Progress } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

import { Header, Main } from "./components";
import ErrorFallback from "./ErrorFallback";
import { theme } from "./theme";

import "./App.css";
import { Suspense } from "react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Progress size="xs" isIndeterminate />}>
          <Header />
          <Main />
        </Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
