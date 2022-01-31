import * as React from "react";
import { Container } from "../Header/Header.style";
import { Logo } from "./Logo";
import { HeaderText } from "./HeaderText";
import { HeaderSelect } from "./HeaderSelect";

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <HeaderText />
      <HeaderSelect />
    </Container>
  );
};
