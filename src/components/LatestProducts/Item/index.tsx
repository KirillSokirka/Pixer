import React from "react";
import { SItem, SImage, SInfo, STitle, SAdditionalInfo } from "./styles";
import { Divider } from "../../../assets/svg";

import Author from "../../Author";
import { ILatestProduct } from "../../interfaces";

const Item = ({ image, title, author, date }: ILatestProduct) => {
  return (
    <SItem>
      <SImage src={image} />
      <SInfo>
        <STitle>{title}</STitle>
        <Author {...author} isSmall={true} />
        <SAdditionalInfo>
          <p>{`${date} Day's ago `}</p>
          <Divider />
          <p>View Products</p>
        </SAdditionalInfo>
      </SInfo>
    </SItem>
  );
};

export default Item;
