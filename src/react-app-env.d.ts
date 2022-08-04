// / <reference types="react-scripts" />
import { Config } from "config";

declare global {
  interface Window {
    CONFIG: Config;
  }
}
