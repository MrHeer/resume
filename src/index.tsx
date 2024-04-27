import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import { ConfigProvider, fetchConfig } from "config";
import { theme } from "theme";
import { initI18n } from "i18n";
import { App } from "app";
import * as serviceWorkerRegistration from "./service-worker-registration";
import { reportWebVitals } from "./report-web-vitals";

async function startApp() {
  const config = await fetchConfig();
  initI18n(config);
  const container = document.getElementById("root") as HTMLElement;
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ConfigProvider config={config}>
        <App />
      </ConfigProvider>
    </StrictMode>
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  serviceWorkerRegistration.register();

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals(console.log);
}

startApp();
