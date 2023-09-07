import styled from "styled-components";
import { sizes } from "../../styles/variables";

const SCategoryTagListContainer = styled.div`
  max-width: 100%;
  overflow-x: scroll;
`;

const SCategoryTagList = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 14px;
  white-space: nowrap;
  margin-top: 14px;
`;

const SCategoryTag = styled.div`
  font-size: ${sizes.desktop.categoryTag};
  display: flex;
  align-items: center;
  padding: 17.175px 32.202px;
  border-radius: 107.341px;
  border: 1.073px solid #282828;
  color: #989898;
  box-sizing: border-box;
  white-space: nowrap;
  line-height: 1;

  @media (max-width: ${sizes.tablet.width}) {
    font-size: ${sizes.tablet.categoryTag};
  }

  @media (max-width: ${sizes.mobile.width}) {
    font-size: ${sizes.mobile.categoryTag};
  }
`;

export { SCategoryTagList, SCategoryTag, SCategoryTagListContainer };
