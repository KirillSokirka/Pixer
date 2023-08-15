import React from "react";
import IOPenable from "../interfaces";
import { SNavItems, SNavItem } from "./styles";

import {
  Authors,
  Feed,
  Home,
  Products,
  Contact,
  Explore,
} from "../../assets/svg";

interface NavItemsProps extends IOPenable {}

interface NavItemProps extends IOPenable {
  logo: React.ComponentType;
  text: string;
}

const navItems = [
  { logo: Home, text: "Home" },
  { logo: Explore, text: "Explore" },
  { logo: Products, text: "Popular Products" },
  { logo: Authors, text: "Top Authors" },
  { logo: Feed, text: "Feed" },
  { logo: Contact, text: "Contact" },
];

const NavItems = ({ isOpen }: NavItemsProps) => {
  return (
    <SNavItems isOpen>
      {navItems.map((item, index) => (
        <NavItem
          key={`nav-item-${index}`}
          logo={item.logo}
          text={item.text}
          isOpen={isOpen}
        />
      ))}
    </SNavItems>
  );
};

const NavItem = ({ logo: Logo, text, isOpen }: NavItemProps) => {
  return (
    <SNavItem>
      <Logo />
      {isOpen && <span>{text}</span>}
    </SNavItem>
  );
};

export { NavItem, NavItems };
