import React from "react";
import { useThemeContext } from "../../../contexts/hooks";

import {
  SAuthor,
  SContanier,
  SButtonContainer,
  SImage,
  SItem,
  SNumber,
  STitle,
  SBookmark,
  SDots,
} from "./styles";

interface ItemProps {
  number: number;
  title: string;
  image: string;
  author: string;
}

const Item = ({ number, title, image, author }: ItemProps) => {
  const { theme } = useThemeContext();

  return (
    <SItem bgColor={theme.topProductsBg}>
      <SContanier>
        <SNumber fontColor={theme.mainColor}>{`0` + number}</SNumber>
        <SImage src={image} />
        <STitle>{title}</STitle>
      </SContanier>
      <SAuthor>{author}</SAuthor>
      <SButtonContainer>
        <SBookmark fill={theme.svgFill} />
        <SDots fill={theme.mainColor} />
      </SButtonContainer>
    </SItem>
  );
};

export default Item;
