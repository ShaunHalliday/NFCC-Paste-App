import * as React from "react";
import { Anchor, Box } from "@twilio-paste/core";
import { Container } from "./Sidenav.style";

export const SideNav: React.FC = () => {
  return (
    <Container>
      <Box
        height="50%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Anchor href="/">Communications Setup</Anchor>
        <Anchor href="/Routing">Routing Options</Anchor>
        <Anchor href="#">Change History</Anchor>
        <Anchor href="#">Holidays</Anchor>
        <Anchor href="#">Connection Insights</Anchor>
      </Box>
    </Container>
  );
};
