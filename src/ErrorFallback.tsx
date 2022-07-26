import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Container,
  Stack,
} from "@chakra-ui/react";
import { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Container>
      <Stack pt={20}>
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          minH="200px"
        >
          <AlertIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </Stack>
    </Container>
  );
}

export default ErrorFallback;
