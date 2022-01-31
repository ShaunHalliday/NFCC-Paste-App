import * as React from "react";
import { Image, LogoContainer } from "./Header.style";
import LogoImage from "../../images/logo.png";

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <Image title="NFCC Logo" src={LogoImage} alt="Logo" />
    </LogoContainer>
  );
};
