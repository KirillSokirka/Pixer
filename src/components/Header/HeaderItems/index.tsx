import React from "react";
import IOPenable from "../../interfaces";
import { SNavItems, SNavItem } from "./styles";

import {
  Authors,
  Feed,
  Home,
  Products,
  Contact,
  Explore,
} from "../../../assets/svg";

const NAV_ITEMS = [
  { logo: Home, text: "Home" },
  { logo: Explore, text: "Explore" },
  { logo: Products, text: "Popular Products" },
  { logo: Authors, text: "Top Authors" },
  { logo: Feed, text: "Feed" },
  { logo: Contact, text: "Contact" },
];

interface HeaderItemProps extends IOPenable {
  logo: React.ComponentType;
  text: string;
}

const HeaderItems = ({ isOpen }: IOPenable) => {
  return (
    <SNavItems isOpen>
      {NAV_ITEMS.map((item, index) => (
        <HeaderItem
          key={`nav-item-${index}`}
          logo={item.logo}
          text={item.text}
          isOpen={isOpen}
        />
      ))}
    </SNavItems>
  );
};

const HeaderItem = ({ logo: Logo, text, isOpen }: HeaderItemProps) => {
  return (
    <SNavItem>
      <Logo />
      {isOpen && <span>{text}</span>}
    </SNavItem>
  );
};

export { HeaderItem, HeaderItems };
