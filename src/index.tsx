import { createRoot } from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";

import * as serviceWorker from "./serviceWorker";
import { theme } from "./theme";

import App from "./App";
import "./i18n";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
