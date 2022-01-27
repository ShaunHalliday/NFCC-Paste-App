import * as React from "react";
import { Box } from "@twilio-paste/core/box";
import {
  Button,
  Card,
  Heading,
  Paragraph,
  Separator,
  Badge,
} from "@twilio-paste/core";

import { NewIcon } from "@twilio-paste/icons/esm/NewIcon";

export const IndexPage: React.FC = () => {
  return (
    <Box margin="auto" paddingLeft="space140" paddingTop="space200">
      <Card>
        <Heading as="h2" variant="heading20">
          Welcome to the NFCC Counsellor Locator Tool!
        </Heading>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Box padding="space40">
          <Badge as="span" variant="new">
            <NewIcon decorative />
            New
          </Badge>
        </Box>
        <Paragraph>To get you started, lets set up your services</Paragraph>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Box justifyContent="flex-end" display="flex">
          <Button variant="primary">Start Initial Setup</Button>
        </Box>
      </Card>
    </Box>
  );
};
