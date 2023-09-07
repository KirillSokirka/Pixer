import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { HeaderContext } from "./HeaderContext";
import { useState, useEffect } from "react";
import { sizes } from "../styles/variables";

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

const useResponsive = () => {
  const [mobileView, setMobileView] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (
        window.matchMedia(`(max-width: ${sizes.smallScreen.width})`).matches
      ) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { mobileView };
};

export { useHeaderContext, useThemeContext, useResponsive };
