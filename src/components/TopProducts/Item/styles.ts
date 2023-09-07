import styled from "styled-components";
import { Bookmark, Dots } from "../../../assets/svg";
import { sizes } from "../../../styles/variables";

const SItem = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  outline: none;
  border-radius: 10px;
  padding: 10px;
  min-height: 100px;
  align-items: center;
  gap: 15px;
  justify-content: space-between;

  @media (max-width: ${sizes.mobile.width}) {
    min-height: 82px;
  }
`;

const SContanier = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

const SButtonContainer = styled(SContanier)`
  gap: 56px;
  padding: 10px;

  @media (max-width: ${sizes.mobile.width}) {
    gap: 30px;
  }
`;

const SNumber = styled.div<{ fontColor: string }>`
  color: ${props => props.fontColor};
  font-size: 24px;
  min-height: 62px;
  min-width: 62px;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: ${sizes.mobile.width}) {
    font-size: 16px;
    min-height: 42px;
    min-width: 42px;
  }
`;

const SImage = styled.img`
  height: 72px;
  width: 72px;
  border-radius: 10px;

  @media (max-width: ${sizes.mobile.width}) {
    height: 48px;
    width: 48px;
  }
`;

const STitle = styled.div`
  font-size: 18px;
  max-width: 292px;

  @media (max-width: ${sizes.mobile.width}) {
    font-size: 12px;
  }
`;

const SAuthor = styled.p`
  color: #545454;
  font-size: 16px;

  @media (max-width: ${sizes.mobile.width}) {
    display: none;
  }
`;

const SBookmark = styled(Bookmark)`
  height: 32px;
  width: 32px;

  @media (max-width: ${sizes.smallScreen.width}) {
    height: 24px;
    width: 24px;
  }
`;

const SDots = styled(Dots)`
  height: 32px;
  width: 32px;

  @media (max-width: ${sizes.smallScreen.width}) {
    height: 24px;
    width: 24px;
  }
`;

export {
  SItem,
  SNumber,
  SImage,
  STitle,
  SAuthor,
  SContanier,
  SButtonContainer,
  SBookmark,
  SDots,
};
