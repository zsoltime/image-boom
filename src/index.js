import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';

import defaultTheme from './theme';

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <>
      <Header />
      <App />
      <Footer />
      <GlobalStyles />
    </>
  </ThemeProvider>,
  document.getElementById('root'),
);
