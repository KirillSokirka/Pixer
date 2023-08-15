import React, { ReactNode } from "react";
import { SLayout, SMain } from "./styles";
import SideBar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import { useHeaderContext } from "../../contexts/hooks";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const headerContext = useHeaderContext();

  return (
    <SLayout>
      {!headerContext.sideBarToggle && <SideBar />}
      <SMain>
        <Header />
        <>{children}</>
      </SMain>
    </SLayout>
  );
};

export default Layout;
