import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface HeaderContextType {
  withSearch: boolean;
  expandedSearch: boolean;
  sideBarToggle: boolean;
  withlogo: boolean;
  logoSmall: boolean;
  setHeaderConfig: React.Dispatch<React.SetStateAction<any>>;
}

const HeaderContext = createContext<HeaderContextType | null>(null);

interface HeaderProviderProps {
  children: ReactNode;
}

const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [headerConfig, setHeaderConfig] = useState({
    withSearch: true,
    expandedSearch: false,
    sideBarToggle: false,
    withlogo: true,
    logoSmall: false,
  });

  useEffect(() => {
    const updateHeaderConfig = () => {
      setHeaderConfig({
        withSearch: true,
        expandedSearch: headerConfig.expandedSearch,
        sideBarToggle: window.matchMedia("(max-width: 1200px)").matches,
        withlogo: window.matchMedia("(max-width: 774px)").matches,
        logoSmall: window.matchMedia("(max-width: 430px)").matches,
      });
    };

    window.addEventListener("resize", updateHeaderConfig);
    updateHeaderConfig();

    return () => window.removeEventListener("resize", updateHeaderConfig);
  }, [headerConfig.expandedSearch]);

  return (
    <HeaderContext.Provider value={{ ...headerConfig, setHeaderConfig }}>
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderProvider, HeaderContext };
