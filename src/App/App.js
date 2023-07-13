import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AppRouter from './AppRouter';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
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
