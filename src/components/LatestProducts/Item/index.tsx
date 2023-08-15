import React from "react";
import { SItem, SImage, SInfo } from "./styles";
import { IAuthor } from "../interfaces";

export interface ItemProps {
  image: string;
  title: string;
  author: IAuthor;
  date: string;
}

const Item = ({ image, title, author, date }: ItemProps) => {
  return (
    <SItem>
      <SImage />
      <SInfo>
        <div>{title}</div>
        <div>{author.name}</div>
        <div>{`${date} Day's ago `}</div>
      </SInfo>
    </SItem>
  );
};

export default Item;
