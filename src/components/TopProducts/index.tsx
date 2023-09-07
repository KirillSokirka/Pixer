import React from "react";
import { SSection } from "./styles";
import Item from "./Item";
import { useThemeContext } from "../../contexts/hooks";

import { TOP_PRODUCTS } from "../../data";

const TopProducts = () => {
  return (
    <SSection>
      {TOP_PRODUCTS.map((i, index) => (
        <Item number={index} {...i} />
      ))}
    </SSection>
  );
};

export default TopProducts;
