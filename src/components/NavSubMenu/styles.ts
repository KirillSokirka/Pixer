import styled from "styled-components";

const SNavSubMenu = styled.div`
  display: flex;
  width: 100%;
  margin-top: 218px;
  margin-bottom: 51px;
  padding: 17.175px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17.175px;
  border-top: 1.073px solid #333;
`;

const SubLinks = styled.div`
  display: flex;
  padding: 0px 21.468px;
  align-items: flex-start;
  gap: 27px;
`;

const SubLink = styled.a`
  display: flex;
  padding: 10.734px;
  align-items: flex-start;
  gap: 10.734px;
  font-size: 17.175px;
`;

const Copy = styled.div`
  font-size: 15.028px;
`;

export { SNavSubMenu, SubLinks, SubLink, Copy };
