import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.offWhite};
    color: ${({ theme }) => theme.black};
    font-family: -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
                'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
  }

  strong {
    font-weight: bolder;
  }

  a {
    border-bottom: 1px solid transparent;
    color: ${({ theme }) => theme.red};
    text-decoration: none;
    transition: border ${({ theme }) =>
      theme.transitionEase}, color ${({ theme }) =>
  theme.transitionEase};
    &:focus,
    &:hover {
      border-bottom-color: ${({ theme }) => theme.black};
      color: ${({ theme }) => theme.black};
    }
  }

  button, input, select, textarea {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0.5rem;
  }

  input, select, textarea {
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  a:focus,
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: thin dotted;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  svg {
    fill: currentColor;
  }
`;
