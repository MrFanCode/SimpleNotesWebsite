import { useState, useEffect } from 'react';

/**
 * useTheme
 * --------
 * Manages dark/light mode. Reads from localStorage, falls back to the
 * user's OS preference, and applies the `dark` class to <html> so
 * Tailwind's darkMode: 'class' strategy works correctly.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('notes-theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('notes-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
