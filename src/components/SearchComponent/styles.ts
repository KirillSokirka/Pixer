import styled, { css } from "styled-components";
import { Search } from "../../assets/svg/index";

const SearchArea = styled.div<{ isOpen: boolean }>`
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

  ${({ isOpen }) =>
    isOpen &&
    css`
      min-width: ${isOpen ? "684px" : "60px"};
      padding-left: ${isOpen ? "30px" : "16px"};
      border: 1px solid ${({ theme }) => theme.buttonBg};
      background-color: ${({ theme }) => theme.buttonBorder};
      box-sizing: border-box;
      border-radius: 100px;

      :after {
        display: none;
      }
    `}
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  background: none;
  color: #fff;
  font-size: 16px;
  position: relative;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  padding: 30px 0px 30px 16px;

  &:focus {
    outline: none;
  }
`;

const SSearch = styled(Search)`
  right: 16px;
  display: flex;
  z-index: 1;
`;

export { SearchArea, SearchInput, SSearch };
