import styled from "styled-components";
import { sizes } from "../../../styles/variables";

const SItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const SImage = styled.img`
  min-width: 200px;
  min-height: 180px;
  border-radius: 10px;

  @media (max-width: ${sizes.mobile.width}) {
    min-width: 180px;
    min-height: 160px;
  }
`;

const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 15px;

  @media (max-width: ${sizes.mobile.width}) {
    justify-content: center;
  }
`;

const STitle = styled.p`
  font-size: 22px;

  @media (max-width: ${sizes.mobile.width}) {
    font-size: 16px;
  }
`;

const SAdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 12px;
  color: #989898;
  align-items: center;

  @media (max-width: ${sizes.mobile.width}) {
    display: none;
  }
`;

export { SItem, SImage, SInfo, STitle, SAdditionalInfo };
