import styled from "styled-components";

import { Dots } from "../../assets/svg";

const SSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 20px;
`;

const SDots = styled(Dots)`
  margin-left: auto;
  fill: ${({ theme }) => theme.mainColor};
`;

const SList = styled.div<{ heightRestriced?: boolean }>`
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
`;

export { SSection, SHeader, SDots, SList };
