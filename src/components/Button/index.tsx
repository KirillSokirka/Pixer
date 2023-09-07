import { ComponentType } from "react";
import { Container, SButton } from "./styles";

interface ButtonProps {
  logo: ComponentType;
  applyResponsive?: boolean;
  onClick?: () => void;
}

const Button = ({ logo: Logo, applyResponsive, onClick }: ButtonProps) => {
  return (
    <SButton onClick={onClick} shouldBeResponsive={applyResponsive}>
      <Container shouldBeResponsive={applyResponsive}>
        <Logo />
      </Container>
    </SButton>
  );
};

export default Button;
