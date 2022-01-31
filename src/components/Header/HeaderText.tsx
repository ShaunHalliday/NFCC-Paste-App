import React from 'react';
import { HeaderText1, HeaderText2, HeaderTextContainer } from './Header.style';

export const HeaderText: React.FC = () => {
  return ( 
      <HeaderTextContainer>
          <HeaderText1 as="p">Locator Tool</HeaderText1>
          <HeaderText2 as="p">Agency A</HeaderText2>
      </HeaderTextContainer>
  );
};
