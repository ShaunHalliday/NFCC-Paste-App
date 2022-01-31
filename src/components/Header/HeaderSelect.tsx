import { Button, Option, Select } from "@twilio-paste/core";
import React from "react";
import { ProfileSelectContainer } from "./Header.style";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";

export const HeaderSelect = () => {
  return (
    <ProfileSelectContainer>
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
    </ProfileSelectContainer>
  );
};
