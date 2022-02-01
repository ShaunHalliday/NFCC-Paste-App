import * as React from "react";
import { Container } from "./Sidenav.style";
import { SidenavLinks } from "./SidenavLinks";

export const SideNav: React.FC = () => {
  return (
    <Container>
        <SidenavLinks />
    </Container>
  );
};
