import React from "react";
import LogoLg from "../../../assets/images/logo-lg.png";
import LogoSm from "../../../assets/images/logo-sm.png";
import { SNavLogo } from "./styles";

interface LogoProps {
  isOpen: boolean;
}

const Logo = ({ isOpen }: LogoProps) => {
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

export default Logo;
