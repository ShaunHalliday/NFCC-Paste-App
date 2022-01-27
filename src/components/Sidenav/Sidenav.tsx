import * as React from "react";
import { Anchor, Box, Text } from "@twilio-paste/core";
import { Link } from "react-router-dom";

export const SideNav: React.FC = () => {
  return (
    <Box
      alignItems="center"
      flexDirection="column"
      height="85vh"
      padding="space40"
      width="15vw"
      backgroundColor="colorBackgroundStrong"
      display="flex"
      position="relative"
    >
      <Box
        height="40%"
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
