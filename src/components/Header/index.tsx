import React from "react";
import {
  SHeader,
  SHeaderTitle,
  SButtons,
  SHeaderMobile,
  SHeaderMobileRow,
} from "./styles";
import ThemeToggler from "../ThemeToggler";
import Button from "../Button";
import { Bag, Person, Burger } from "../../assets/svg";
import { SearchComponent } from "../SearchComponent";
import { useHeaderContext } from "../../contexts/hooks";
import NavLogo from "./Logo";

const Header = () => {
  const headerContext = useHeaderContext();

  return (
    <>
      {headerContext.sideBarToggle ? (
        <SHeaderMobile>
          <SHeaderMobileRow>
            <Button logo={Burger} />
            <NavLogo isOpen={!headerContext.logoSmall} />
            <SButtons>
              <Button logo={Bag} />
              <Person />
            </SButtons>
          </SHeaderMobileRow>
          <SearchComponent defaultOpen={true} />
        </SHeaderMobile>
      ) : (
        <SHeader>
          <SHeaderTitle>Explore</SHeaderTitle>
          <SButtons>
            <SearchComponent />
            <ThemeToggler />
            <Button logo={Bag} />
            <Person />
          </SButtons>
        </SHeader>
      )}
    </>
  );
};

export default Header;
