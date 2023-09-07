import { SList } from "./styles";

import Item from "./Item";

import { LATEST_PRODUCTS } from "../../data";

const LatestProductsSection = () => {
  return (
    <SList>
      {LATEST_PRODUCTS.map(i => (
        <Item {...i} />
      ))}
    </SList>
  );
};

export default LatestProductsSection;
