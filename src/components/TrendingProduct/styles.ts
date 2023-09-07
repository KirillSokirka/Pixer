import styled from "styled-components";
import IOPenable from "../interfaces";
import { sizes } from "../../styles/variables";
import Button from "../Button";

const SContent = styled.div`
  width: 100%;
`;

const SImage = styled.img<IOPenable>`
  height: 440px;
  width: 100%;
  transition: max-width 0.3s ease;

  @media (max-width: ${sizes.tablet.width}) {
    max-height: 309px;
  }

  @media (max-width: ${sizes.mobile.width}) {
    max-height: 183.13px;
  }
`;

const STitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    max-width: 544px;
    font-size: 32px;

    @media (max-width: ${sizes.tablet.width}) {
      font-size: 22px;
    }

    @media (max-width: ${sizes.mobile.width}) {
      font-size: 18px;
    }
  }
`;

const SAuthorSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const SAuthorButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 24px;

  @media (max-width: ${sizes.tablet.width}) {
    font-size: 18px;
  }

  @media (max-width: ${sizes.mobile.width}) {
    gap: 14px;
  }
`;

const SFolowButton = styled.button`
  height: 62px;
  width: 117px;
  border-radius: 100px;
  font-size: 18px;
  color: #ffffff;
  background-color: #24b47e;
  outline: none;
  border: 0px;

  @media (max-width: ${sizes.tablet.width}) {
    height: 52px;
    width: 100px;
    font-size: 15.47px;
  }

  @media (max-width: ${sizes.mobile.width}) {
    height: 35px;
    width: 65px;
    font-size: 10px;
  }
`;

const SMobileSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -10px;
`;

const SMobileView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export {
  SContent,
  STitleSection,
  SAuthorSection,
  SImage,
  SAuthorButtons,
  SFolowButton,
  SMobileSection,
  SMobileView,
};
