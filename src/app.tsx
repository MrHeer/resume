import { Suspense } from "react";
import { ChakraProvider, Progress } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { Header, KBar, Main } from "components";
import { ErrorFallback } from "error-fallback";
import { theme } from "theme";
import { Helmet } from "helmet";

import "app.css";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Helmet />
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
