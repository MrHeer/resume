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
import { useTranslation } from "react-i18next";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const { t } = useTranslation();

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
        <Button onClick={resetErrorBoundary}>{t("tryAgain")}</Button>
      </Stack>
    </Container>
  );
}

export default ErrorFallback;
