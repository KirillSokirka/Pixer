import styled, { css } from "styled-components";
import { btnReset } from "../../styles/variables";
import { sizes } from "../../styles/variables";

const SButton = styled.button<{ shouldBeResponsive?: boolean }>`
  ${btnReset}
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px;
  cursor: pointer;
  width: 66.551px;
  height: 66.551px;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 66.551px;
    height: 66.551px;
    outline: 1px solid transparent;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.buttonBg};
    background-color: ${({ theme }) => theme.buttonBorder};
  }

  ${({ shouldBeResponsive }) =>
    shouldBeResponsive &&
    css`
      @media (max-width: ${sizes.tablet.width}) {
        height: 53px;
        width: 53px;

        ::after {
          height: 53px;
          width: 53px;
        }
      }

      @media (max-width: ${sizes.mobile.width}) {
        height: 34px;
        width: 34px;

        ::after {
          height: 34px;
          width: 34px;
        }
      }
    `}
`;

const Container = styled.div<{ shouldBeResponsive?: boolean }>`
  z-index: 1;
  display: flex;
  align-self: center;

  svg {
    fill: ${({ theme }) => theme.svgFill};
    height: 24px;
    width: 24px;

    ${({ shouldBeResponsive }) =>
      shouldBeResponsive &&
      css`
        @media (max-width: ${sizes.smallScreen.width}) {
          height: 22px;
          width: 22px;
        }

        @media (max-width: ${sizes.tablet.width}) {
          height: 20px;
          width: 20px;
        }

        @media (max-width: ${sizes.mobile.width}) {
          height: 12px;
          width: 12px;
        }
      `}
  }
`;

export { SButton, Container };
