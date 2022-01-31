import { Box, Button, Select } from "@twilio-paste/core";
import * as React from "react";
import { Text } from "@twilio-paste/core";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { Option } from "@twilio-paste/core";
import Logo from "../../images/logo.png";
import { Container, LogoContainer } from "../Header/Header.style";

export const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
          <img title="NFCC Logo" src={Logo} alt="Logo" height="50em" />
      </LogoContainer>
      <Box width="40vw">
        <Text
          color={["colorTextBrandInverse"]}
          as="p"
        >
          Locator Tool
        </Text>
        <Text
          color={["colorTextBrandInverse"]}
          as="p"
          fontSize={["fontSize90"]}
          paddingTop={"space40"}
          fontWeight="fontWeightBold"
        >
          Agency A
        </Text>
      </Box>
      <Box width="20vw" alignContent="flex-end">
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
          <Option color="black" value="User">
            Caz Stephenson
          </Option>
          <Option color="black" value="User">
            Shaun Halliday
          </Option>
          <Option color="black" value="User">
            Sina Taavon
          </Option>
          <Option color="black" value="User">
            Liz Jenkins
          </Option>
        </Select>
      </Box>
    </Container>
  );
};
