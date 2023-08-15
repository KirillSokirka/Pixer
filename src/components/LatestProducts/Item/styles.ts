import styled from "styled-components";

const SItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const SImage = styled.div`
  min-width: 200px;
  min-height: 180px;
  background-color: blue;
  border-radius: 10px;
`;

const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

export { SItem, SImage, SInfo };
