import styled from "styled-components";
import { Search } from "../../assets/svg/index";

const SearchArea = styled.div<{ isOpen: boolean }>`
  display: flex;
  min-width: ${props => (props.isOpen ? "684px" : "60px")};
  flex-grow: 1;
  height: 66.551px;
  width: 66.551px;
  align-items: center;
  border-radius: 100px;
  padding-left: ${props => (props.isOpen ? "30px" : "16px")};
  border: 1px solid ${({ theme }) => theme.buttonBg};
  background-color: ${({ theme }) => theme.buttonBorder};
  transition: min-width 0.3s ease;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 744px) {
    min-width: 100%;
  }
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
