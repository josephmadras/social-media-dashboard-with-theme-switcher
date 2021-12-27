import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const themes = {
  dark: {
    backgroundColor: "hsl(230, 17%, 14%)",
    cardBackground: "hsl(228, 28%, 20%)",
    blue: "hsl(228, 34%, 66%)",
    white: "hsl(0, 0%, 100%)",
    grayish: "hsl(228, 12%, 44%)",
    topColor: "hsl(232, 19%, 15%)",
  },
  light: {
    backgroundColor: "hsl(0, 0%, 100%)",
    cardBackground: "hsl(227, 47%, 96%)",
    blue: "hsl(230, 17%, 14%)",
    white: "hsl(0, 0%, 100%)",
    grayish: "hsl(228, 12%, 44%)",
    topColor: "hsl(225, 100%, 98%)",
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
