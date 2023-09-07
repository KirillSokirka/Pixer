import React, { MouseEvent } from "react";
import { SSidebar } from "./styles";

import Logo from "../Header/Logo";
import NavSubMenu from "./SidebarInfoMenu";
import { HeaderItems } from "../Header/HeaderItems";

import { useThemeContext } from "../../contexts/hooks";

const Sidebar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useThemeContext();

  const handleSidebarClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      setIsSideBarOpen(prevState => !prevState);
    }
  };

  return (
    <SSidebar onClick={handleSidebarClick} isOpen={isSideBarOpen}>
      <Logo isOpen={isSideBarOpen} />
      <HeaderItems isOpen={isSideBarOpen} />
      {isSideBarOpen && <NavSubMenu />}
    </SSidebar>
  );
};

export default Sidebar;
