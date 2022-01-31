import styled from "@emotion/styled";
import { Box, Text } from "@twilio-paste/core";

export const Container = styled(Box)`
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  height: 10vh;
  display: flex;
  padding: 5em;
  width: 100vw;
  background-color: #0085AD;
  position: relative;
`;

export const LogoContainer = styled(Box)`
  width: 40vw;
  align-items: flex-start;  
`;

export const Image = styled('img')`
    height: 4em;
`;

export const HeaderTextContainer = styled(Box)`
    width: 40vw;
`;

export const HeaderText1 = styled(Text)`
    color: white;
`;

export const HeaderText2 = styled(Text)`
    color: white;
    font-size: 2em;
    padding-top: 0.2em;
    font-weight: 700;
`;

export const ProfileSelectContainer = styled(Box)`
    width: 20vw;
    align-content: flex-end;
`;
