/**
 * Inline script that runs before React hydration to prevent FOUC.
 * It reads the stored theme preference and applies the `dark` class
 * to <html> before the browser paints the first frame.
 */
export const themeScript = `(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme;
    if (stored === 'light' || stored === 'dark') {
      theme = stored;
    } else {
      theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})()`
