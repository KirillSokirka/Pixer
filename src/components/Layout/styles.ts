import styled from "styled-components";
import { sizes } from "../../styles/variables";

const SLayout = styled.div`
  display: flex;
`;

const SMain = styled.main`
  width: 100%;
  font-size: 21.442px;
  padding: ${sizes.desktop.padding};

  @media (max-width: ${sizes.tablet.width}) {
    padding: ${sizes.tablet.padding};
  }

  @media (max-width: ${sizes.mobile.width}) {
    padding: ${sizes.mobile.padding};
  }
`;

export { SLayout, SMain };
