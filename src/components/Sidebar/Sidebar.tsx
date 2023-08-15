import React, { useState, MouseEvent } from "react";
import { SSidebar } from "./styles";

import NavLogo from "../NavLogo";
import { NavItems } from "../NavItems";
import NavSubMenu from "../NavSubMenu/NavSubMenu";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <SSidebar onClick={handleSidebarClick} isOpen={sidebarOpen}>
      <NavLogo isOpen={sidebarOpen} />
      <NavItems isOpen={sidebarOpen} />
      {sidebarOpen && <NavSubMenu />}
    </SSidebar>
  );
};

export default Sidebar;
