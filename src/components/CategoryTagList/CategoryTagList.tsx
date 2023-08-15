import React from "react";
import { SCategoryTagList, SCategoryTag } from "./styles";

const categoryTagList = [
  "HTML",
  "FIGMA",
  "React JS",
  "CSS",
  "Next JS",
  "Tailwind",
  "Javascript",
  "Node JS",
];

const CategoryTagList = () => {
  return (
    <SCategoryTagList>
      {categoryTagList.map((item, index) => (
        <SCategoryTag key={`item-` + index}>{item}</SCategoryTag>
      ))}
    </SCategoryTagList>
  );
};

export default CategoryTagList;
