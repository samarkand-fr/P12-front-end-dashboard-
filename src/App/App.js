import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AppRouter from './AppRouter';

const GlobalStyle = createGlobalStyle`

  body {
    font-family:  'Roboto', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};

export default App;
