import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { HeaderContext } from "./HeaderContext";

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
};

const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }

  return context;
};

export { useHeaderContext, useThemeContext };
