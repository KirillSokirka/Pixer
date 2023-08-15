import React from "react";
import { LogoSm, LogoLg } from "../../assets/index";
import { SNavLogo } from "./styles";

interface NavLogoProps {
  isOpen: boolean;
}

const NavLogo = ({ isOpen }: NavLogoProps) => {
  return (
    <SNavLogo isOpen>
      {isOpen ? (
        <img src={LogoLg} alt="Large Logo" />
      ) : (
        <img src={LogoSm} alt="Small Logo" />
      )}
    </SNavLogo>
  );
};

export default NavLogo;
