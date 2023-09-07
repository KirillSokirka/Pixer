import styled from "styled-components";
import { v } from "../../styles/variables";
import IOPenable from "../interfaces";

const SSidebar = styled.div<IOPenable>`
  width: ${({ isOpen }) =>
    !isOpen ? v.sidebarClosedWidth : v.sidebarOpenWidth};
  padding-top: ${({ isOpen }) =>
    !isOpen ? v.navLogoTopMarginClosed : v.navLogoTopMarginOpen};
  background-color: ${({ theme }) => theme.sidebarBackground};
  color: ${({ theme }) => theme.sidebarColor};
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export { SSidebar };
