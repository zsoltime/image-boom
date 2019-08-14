import React from 'react';
import styled from 'styled-components';

import LogoIcon from './Icons/Logo';

const StyledHeader = styled.header`
  padding: 0.5rem 0;
  text-align: center;
`;

const Logo = styled.h1`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: 200;
  justify-content: center;
  letter-spacing: -1px;
  margin: 0;

  strong {
    letter-spacing: -2.5px;
  }

  svg {
    margin-right: 0.5rem;
    transform: translateY(0.5px);
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <LogoIcon size="32px" />
      image<strong>boom</strong>
    </Logo>
  </StyledHeader>
);

export default Header;
