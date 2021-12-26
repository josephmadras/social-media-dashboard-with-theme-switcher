import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const themes = {
  dark: {
    backgroundColor: "hsl(230, 17%, 14%)",
    cardBackground: "hsl(228, 28%, 20%)",
    textBlueColor: "hsl(228, 34%, 66%)",
    textWhiteColor: "hsl(0, 0%, 100%)",
    topColor: "hsl(232, 19%, 15%)",
    textGrayishColor: "hsl(228, 12%, 44%)",
  },
  light: {
    backgroundColor: "hsl(0, 0%, 100%)",
    cardBackground: "hsl(227, 47%, 96%)",
    textBlueColor: "hsl(230, 17%, 14%)",
    textWhiteColor: "hsl(0, 0%, 100%)",
    topColor: "hsl(225, 100%, 98%)",
    textGrayishColor: "hsl(228, 12%, 44%)",
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
