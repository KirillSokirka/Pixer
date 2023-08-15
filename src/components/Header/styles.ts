import styled from "styled-components";

const SHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SHeaderMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: auto;
`;

const SHeaderMobileRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SHeaderTitle = styled.p`
  font-size: 32px;
`;

const SButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-end;
  align-items: center;
  gap: 27.909px;
`;

export { SHeader, SHeaderTitle, SButtons, SHeaderMobile, SHeaderMobileRow };
