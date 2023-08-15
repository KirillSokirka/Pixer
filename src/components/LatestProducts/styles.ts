import styled from "styled-components";
import { Dots } from "../../assets/svg";

const SSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;

const SHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 20px;
`;

const SDots = styled(Dots)`
  margin-left: auto;
`;

const SList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export { SSection, SHeader, SDots, SList };
