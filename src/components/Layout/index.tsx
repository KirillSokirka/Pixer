import { ReactNode } from "react";
import { SMain, SLayout } from "./styles";
import SideBar from "../Sidebar";
import Header from "../Header";

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
