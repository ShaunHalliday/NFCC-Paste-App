import * as React from "react";
import { Anchor, Box } from "@twilio-paste/core";

export const SideNav: React.FC = () => {
  return (
    <Box
      alignItems="center"
      flexDirection="column"
      height="85vh"
      padding="space120"
      width="15vw"
      backgroundColor="colorBackgroundStrong"
      display="flex"
      position="relative"
    >
      <Box
        height="50%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box backgroundColor="colorBackgroundOffline" padding="space40">
          <Anchor text-decoration="none" href="/">
            Communications Setup
          </Anchor>
        </Box>
          <Anchor href="/Routing">Routing Options</Anchor>
        <Anchor href="#">Change History</Anchor>
        <Anchor href="#">Holidays</Anchor>
        <Anchor href="#">Connection Insights</Anchor>
      </Box>
    </Box>
  );
};
