import React, { ComponentType } from "react";
import { Container, SButton } from "./styles";

interface ButtonProps {
  logo: ComponentType;
  onClick?: () => void;
}

const Button = ({ logo: Logo, onClick }: ButtonProps) => {
  return (
    <SButton onClick={onClick}>
      <Container>
        <Logo />
      </Container>
    </SButton>
  );
};

export default Button;
