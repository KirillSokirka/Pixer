import styled from "styled-components";
import { sizes } from "../../styles/variables";

const SCategoryTagList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  right: 0;
  width: calc(100% + 46px);
  right: -46px;
  position: absolute;
  white-space: nowrap;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-top: 14px;
  z-index: 2;

  @media (max-width: ${sizes.tablet.width}) {
    left: ${sizes.tablet.left};
  }

  @media (max-width: ${sizes.mobile.width}) {
    left: ${sizes.mobile.left};
  }
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

export { SCategoryTagList, SCategoryTag };
