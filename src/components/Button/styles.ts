import styled from "styled-components";
import { btnReset } from "../../styles/variables";

const SButton = styled.button`
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
`;

const Container = styled.div`
  z-index: 1;
  display: flex;
  align-self: center;

  svg {
    fill: ${({ theme }) => theme.svgFill};
  }
`;

export { SButton, Container };
