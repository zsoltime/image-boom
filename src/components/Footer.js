import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.black};

  padding: 0.25rem 0;

  p {
    color: #fff;
    font-size: 0.75rem;
    margin: 0;
    text-align: center;
  }

  a:focus,
  a:hover {
    color: ${({ theme }) => theme.offWhite};
  }
`;

const Footer = () => (
  <StyledFooter>
    <Wrapper>
      <p>
        Made with love by Zsolt Meszaros using the{' '}
        <a
          href="https://pixabay.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Pixabay
        </a>{' '}
        API
      </p>
      <p>
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/smashicons"
          rel="noopener noreferrer"
          target="_blank"
        >
          Smashicons
        </a>
        , licensed by{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          rel="noopener noreferrer"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </p>
    </Wrapper>
  </StyledFooter>
);

export default Footer;
