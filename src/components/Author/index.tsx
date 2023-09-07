import React from "react";

import {
  SFolowers,
  SAuthor,
  SInfo,
  SName,
  SLogo,
  SNameArea,
  SVerifed,
} from "./styles";

interface AuthorProps {
  logo: string;
  name: string;
  folowers: number;
  isVerified: boolean;
  isSmall?: boolean;
}

const Author = ({ logo, name, folowers, isVerified, isSmall }: AuthorProps) => {
  return (
    <SAuthor>
      <SLogo src={logo} small={isSmall} />
      <SInfo>
        <SNameArea>
          <SName small={isSmall}>{name}</SName>
          {isVerified && <SVerifed small={isSmall} />}
        </SNameArea>
        <SFolowers small={isSmall}>{folowers} folowers</SFolowers>
      </SInfo>
    </SAuthor>
  );
};

export default Author;
