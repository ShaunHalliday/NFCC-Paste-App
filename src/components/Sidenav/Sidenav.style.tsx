import styled from "@emotion/styled";
import { Anchor, Box } from "@twilio-paste/core";

export const Container = styled(Box)`
  align-items: center;
  flex-direction: column;
  height: 85vh;
  padding: 2em;
  width: 15vw;
  background-color: #e6f4f1;
  display: flex;
  position: relative;
`;

export const LinkContainer = styled(Box)`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Link = styled(Anchor)``;
