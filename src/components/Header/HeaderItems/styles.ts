import styled from "styled-components";
import { v } from "../../../styles/variables";
import IOPenable from "../../interfaces";

const SNavItems = styled.div<IOPenable>`
  position: relative;
  display: inline-flex;
  padding: 10.734px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 25.762px;
  margin-top: ${({ isOpen }) => (!isOpen ? `${167 - 31}px` : `${167 - 38}px`)};
  margin-left: ${({ isOpen }) => (!isOpen ? `46px` : `40px`)};
`;

const SNavItem = styled.div`
  display: flex;
  height: 73.517px;
  padding: 0px 21.442px;
  align-items: center;
  gap: 16.848px;
  font-size: 21.442px;

  svg {
    width: 36.759px;
    height: 36.759px;
    fill: ${v.navItemDefaultColor};
  }

  &:hover {
    background: linear-gradient(83deg, #303030 0%, rgba(33, 33, 33, 0) 83.33%);

    svg {
      fill: ${v.navItemHoverColor};
    }
  }
`;

export { SNavItems, SNavItem };
