import React, { ReactNode } from "react";

import { SSection, SHeader, SDots, SList } from "./styles";

interface ListSectionProps {
  title: string;
  children: ReactNode;
}

const ListSection = ({ title, children }: ListSectionProps) => {
  return (
    <SSection>
      <SHeader>
        {title}
        <SDots />
      </SHeader>
      <SList>{children}</SList>
    </SSection>
  );
};

export default ListSection;
