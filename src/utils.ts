import { PUBLIC_URL } from "env";

export function isAbsoluteURL(url: string) {
  if (url.indexOf("://") > 0 || url.indexOf("//") === 0) {
    return true;
  }
  return false;
}

export function resolveURL(url: string) {
  const { protocol, host } = window.location;
  if (isAbsoluteURL(url)) {
    return url;
  } else {
    return `${protocol}//${host}${PUBLIC_URL}/${url}`;
  }
}

export function isMacOS() {
  const { userAgent } = navigator;
  return userAgent.includes("Mac OS");
}

export function getCommandKey() {
  if (isMacOS()) {
    return "Command";
  } else {
    return "Ctrl";
  }
}
