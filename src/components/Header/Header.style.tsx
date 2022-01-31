import styled from "@emotion/styled";
import { Box } from "@twilio-paste/core";

export const Container = styled(Box)`
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  height: 10vh;
  display: flex;
  padding: 5em;
  width: 100vw;
  background-color: #150C39;
  position: relative;
`;

export const LogoContainer = styled(Box)`
  width: 40vw;
  align-items: flex-start;  
`;

export const Image = styled('img')`
    height: 4em;
`;