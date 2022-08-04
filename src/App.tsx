import { Suspense } from "react";
import { ChakraProvider, Progress } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { Header, KBar, Main } from "components";
import ErrorFallback from "ErrorFallback";
import { theme } from "theme";

import "App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Progress size="xs" isIndeterminate />}>
          <KBar>
            <Header />
            <Main />
          </KBar>
        </Suspense>
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
