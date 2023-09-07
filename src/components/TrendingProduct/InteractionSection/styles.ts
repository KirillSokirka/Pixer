import styled from "styled-components";
import { sizes } from "../../../styles/variables";

const SInteractionSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 26px;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.svgFill};

    width: 30px;
    height: 30px;

    @media (max-width: ${sizes.tablet.width}) {
      width: 25px;
      height: 25px;
    }

    @media (max-width: ${sizes.mobile.width}) {
      width: 20px;
      height: 20px;
    }
  }
`;

const SInteractionItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13.94px;
  align-items: center;
  justify-content: center;
  p {
    font-size: 20.27px;

    @media (max-width: ${sizes.tablet.width}) {
      font-size: 18px;
    }

    @media (max-width: ${sizes.mobile.width}) {
      font-size: 14px;
    }
  }
`;

export { SInteractionSection, SInteractionItem };
