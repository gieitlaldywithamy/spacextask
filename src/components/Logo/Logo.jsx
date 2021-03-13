import React from "react";
import logo from '../../assets/spacex-logo.png';

import { LogoContainer, TextContainer } from './Logo.styled';

const Logo = () => {
  return (
    <LogoContainer>
        <img src={logo} alt="spacex logo" />
      <TextContainer>
        <span>LAUNCHES</span>
      </TextContainer>
    </LogoContainer>
  );
};

export default Logo;