import styled from "styled-components";

const SHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const SHeaderMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const SHeaderMobileRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SHeaderTitle = styled.p`
  font-size: 32px;
`;

const SButtons = styled.div`
  display: flex;
  gap: 27.909px;
  justify-content: space-between;
  margin-left: auto;
`;

export { SHeader, SHeaderTitle, SButtons, SHeaderMobile, SHeaderMobileRow };
