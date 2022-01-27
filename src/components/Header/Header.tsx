import { Box, Button, Select } from "@twilio-paste/core";
import * as React from "react";
import { Text } from "@twilio-paste/core";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { Option } from "@twilio-paste/core";

export const Header: React.FC = () => {
  return (
    <Box
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="row"
      height="20vh"
      display="flex"
      padding="space120"
      width="100vw"
      backgroundColor="colorBackgroundBrandStrong"
      position="relative"
    >
      <Box width="20vw">
        <Text
          color={["colorTextBrandInverse"]}
          as="h1"
          fontSize={["fontSize100"]}
        >
          NFCC
        </Text>
      </Box>
      <Box width="80vw">
        <Text color={["colorTextBrandInverse"]} as="h3">
          Locator Tool
        </Text>
        <Text
          color={["colorTextBrandInverse"]}
          as="h2"
          fontSize={["fontSize90"]}
          paddingTop={"space40"}
        >
          Agency A
        </Text>
      </Box>
      <Box width="25vw" alignContent="flex-end">
      <Select
        id="profile"
        insertBefore={
          <Button variant="link">
            <UserIcon
              decorative={false}
              size="sizeIcon20"
              title="Get more info"
            />
          </Button>
        }
      >
          <Option color="black" value="User">Caz Stephenson</Option>
          <Option color="black" value="User">Shaun Halliday</Option>
          <Option color="black" value="User">Sina Taavon</Option>
          <Option color="black" value="User">Liz Jenkins</Option>
      </Select>
      </Box>
    </Box>
  );
};
