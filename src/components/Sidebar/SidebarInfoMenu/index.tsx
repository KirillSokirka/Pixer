import { SNavSubMenu, SubLinks, SubLink, Copy } from "./styles";

const NavSubMenu = () => {
  return (
    <SNavSubMenu>
      <SubLinks>
        <SubLink>Terms</SubLink>
        <SubLink>Privacy</SubLink>
        <SubLink>Help</SubLink>
      </SubLinks>
      <Copy> Copyright 2023 by RedQ, Inc</Copy>
    </SNavSubMenu>
  );
};

export default NavSubMenu;
