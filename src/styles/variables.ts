import { css } from "styled-components";

const v = {
  sidebarOpenWidth: `358px`,
  sidebarClosedWidth: `172px`,
  navLogoTopMarginClosed: `38px`,
  navLogoLeftMarginClosed: `62.5px`,
  navLogoTopMarginOpen: `31px`,
  navLogoLeftMarginOpen: `47px`,
  navItemDefaultColor: `#808080`,
  navItemHoverColor: `#24B47E`,
};

const btnReset = css`
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
`;

const sizes = {
  mobile: {
    width: `460px`,
    left: `13px`,
    padding: `10px 5px`,
    categoryTag: `16px`,
  },
  tablet: {
    width: `744px`,
    left: `28px`,
    padding: `20px 15px`,
    categoryTag: `16px`,
  },
  smallScreen: {
    width: `1200px`,
    left: `28px`,
    padding: `51px 28px`,
    categoryTag: `16px`,
  },
  desktop: {
    width: `1800px`,
    left: `46px`,
    padding: `33px 46px`,
    categoryTag: `19px`,
  },
};

const authorStyles = {
  small: {
    logoSize: "32px",
    nameSize: "12px",
    folowersSize: "10px",
    marginSize: "5px",
    starSize: "20px",
  },
  default: {
    logoSize: "42px",
    nameSize: "24px",
    folowersSize: "14px",
    marginSize: "11px",
    starSize: "27.5px",
  },
};

export { v, btnReset, sizes, authorStyles };
