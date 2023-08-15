import React from "react";
import { SSection, SHeader, SDots, SList } from "./styles";
import Item, { ItemProps } from "./Item";
import { IAuthor } from "./interfaces";

const AUTHOR_LIST: IAuthor[] = [
  {
    name: "Imagineco",
    folowers: 20,
    isVerified: true,
    logo: "",
  },
  {
    name: "Bitronic",
    folowers: 20,
    isVerified: false,
    logo: "",
  },
  {
    name: "Qubitron Solutions",
    folowers: 20,
    isVerified: true,
    logo: "",
  },
];

const ITEM_LIST: ItemProps[] = [
  {
    title: "​RNB Modern Laravel React Rental System",
    image: "",
    author: AUTHOR_LIST[0],
    date: "3",
  },
];

const LatestProductsSection = () => {
  return (
    <SSection>
      <SHeader>
        Latest Products
        <SDots />
      </SHeader>
      <SList>
        {ITEM_LIST.map(i => (
          <Item {...i} />
        ))}
      </SList>
    </SSection>
  );
};

export default LatestProductsSection;
