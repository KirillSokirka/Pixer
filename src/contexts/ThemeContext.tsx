import React, { createContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeInterface } from "../styles/theme";
import { lightTheme, darkTheme } from "../styles/themes";

interface ThemeContextType {
  theme: ThemeInterface;
  isSideBarOpen: boolean;
  setTheme: React.Dispatch<React.SetStateAction<ThemeInterface>>;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeInterface>(darkTheme);
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  useEffect(() => {
    setTheme(theme === lightTheme ? lightTheme : darkTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ setTheme, theme, isSideBarOpen, setIsSideBarOpen }}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
