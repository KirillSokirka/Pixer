import { SCategoryTagList, SCategoryTag } from "./styles";

import { CATEGORY_TAGS } from "../../data";

const CategoryTagList = () => {
  return (
    <SCategoryTagList>
      {CATEGORY_TAGS.map((item, index) => (
        <SCategoryTag key={`item-` + index}>{item}</SCategoryTag>
      ))}
    </SCategoryTagList>
  );
};

export default CategoryTagList;
