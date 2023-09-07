import {
  SCategoryTagList,
  SCategoryTag,
  SCategoryTagListContainer,
} from "./styles";

import { CATEGORY_TAGS } from "../../data";

const CategoryTagList = () => {
  return (
    <SCategoryTagListContainer>
      <SCategoryTagList>
        {CATEGORY_TAGS.map((item, index) => (
          <SCategoryTag key={`item-` + index}>{item}</SCategoryTag>
        ))}
      </SCategoryTagList>
    </SCategoryTagListContainer>
  );
};

export default CategoryTagList;
