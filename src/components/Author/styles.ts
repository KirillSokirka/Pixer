import styled from "styled-components";
import { Verified } from "../../assets/svg";

import { authorStyles, sizes } from "../../styles/variables";

const SAuthor = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SLogo = styled.img<{ small?: boolean }>`
  height: ${props =>
    props.small ? authorStyles.small.logoSize : authorStyles.default.logoSize};
  width: ${props =>
    props.small ? authorStyles.small.logoSize : authorStyles.default.logoSize};
  align-self: center;

  @media (max-width: ${sizes.tablet.width}) {
    height: ${authorStyles.small.logoSize};
    width: ${authorStyles.small.logoSize};
  }
`;

const SNameArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const SName = styled.div<{ small?: boolean }>`
  font-size: ${props =>
    props.small ? authorStyles.small.nameSize : authorStyles.default.nameSize};
  width: fit-content;
  block-size: fit-content;
  display: inline-block;
  white-space: normal;

  @media (max-width: ${sizes.tablet.width}) {
    font-size: ${authorStyles.small.nameSize};
  }
`;

const SFolowers = styled.p<{ small?: boolean }>`
  font-size: ${props =>
    props.small
      ? authorStyles.small.folowersSize
      : authorStyles.default.folowersSize};
  color: #666666;

  @media (max-width: ${sizes.tablet.width}) {
    font-size: ${authorStyles.small.folowersSize};
  }
`;

const SVerifed = styled(Verified)<{ small?: boolean }>`
  height: ${props =>
    props.small ? authorStyles.small.starSize : authorStyles.default.starSize};
  width: ${props =>
    props.small ? authorStyles.small.starSize : authorStyles.default.starSize};
  min-height: ${props =>
    props.small ? authorStyles.small.starSize : authorStyles.default.starSize};
  min-width: ${props =>
    props.small ? authorStyles.small.starSize : authorStyles.default.starSize};

  @media (max-width: ${sizes.tablet.width}) {
    height: ${authorStyles.small.starSize};
    width: ${authorStyles.small.starSize};
    min-height: ${authorStyles.small.starSize};
    min-width: ${authorStyles.small.starSize};
  }
`;

export { SAuthor, SInfo, SName, SFolowers, SLogo, SNameArea, SVerifed };
