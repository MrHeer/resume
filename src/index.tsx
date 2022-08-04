import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import { initConfig } from "config";
import { theme } from "theme";
import { initI18n } from "i18n";
import App from "App";
import * as serviceWorker from "serviceWorker";

async function startApp() {
  const config = await initConfig();
  window.CONFIG = config;
  initI18n(config);
  const container = document.getElementById("root");
  const root = createRoot(container!);
  root.render(
    <StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </StrictMode>
  );
}
startApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
