import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("award-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return false;
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("award-theme", theme);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme, }} >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}