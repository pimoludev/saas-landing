"use client";
import { PimoluProvider } from "@pimolu/react";
import { createContext, useContext, useState } from "react";
type Theme = "light" | "dark";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});
export function ThemeProvider({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.cookie = `workspace-theme=${next}; path=/; max-age=31536000; samesite=lax`;
  }
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <PimoluProvider theme={theme} brandColor="#426b59">
        {children}
      </PimoluProvider>
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  return useContext(ThemeContext);
}
