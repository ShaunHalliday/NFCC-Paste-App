import { Anchor } from "@twilio-paste/core";
import * as React from "react";
import { LinkContainer } from "./Sidenav.style";

export const SidenavLinks: React.FC = () => {
  return (
    <LinkContainer>
      <Anchor href="/">Communications Setup</Anchor>
      <Anchor href="/Routing">Routing Options</Anchor>
      <Anchor href="#">Change History</Anchor>
      <Anchor href="#">Holidays</Anchor>
      <Anchor href="#">Connection Insights</Anchor>
    </LinkContainer>
  );
};
