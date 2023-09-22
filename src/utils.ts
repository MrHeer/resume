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

export function transitionHelper({
  skipTransition = false,
  classNames = [],
  updateDOM,
}: {
  skipTransition?: boolean;
  classNames?: string[];
  updateDOM: () => Promise<void> | void;
}) {
  if (skipTransition || !document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM()).then(() => {});

    return {
      ready: Promise.reject(Error("View transitions unsupported")),
      updateCallbackDone,
      finished: updateCallbackDone,
      skipTransition: () => {},
    };
  }

  document.documentElement.classList.add(...classNames);

  const transition = document.startViewTransition(updateDOM);

  transition.finished.finally(() =>
    document.documentElement.classList.remove(...classNames)
  );

  return transition;
}
