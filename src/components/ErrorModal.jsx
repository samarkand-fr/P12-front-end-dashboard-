import React from 'react';
import styled from 'styled-components';


function Error404() {
  return (
    <ErrorBackground>
      <ErrorContent>
          <ErrorTitle>oups... une erreur s'est produite</ErrorTitle>
      </ErrorContent>
    </ErrorBackground>
  );
}

export default Error404;

const ErrorBackground = styled.section`
  background-color: rgba(26, 39, 156, 0.4);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const ErrorTitle = styled.h3`
  font-size: 1.5rem;
`;


const ErrorContent = styled.div`
  background: #232323;
  border-radius: 0.625rem;
  color: #fff;
  margin: 5% auto;
  max-width: 31.25rem;
  overflow: hidden;
  padding-top: 0.625rem;
  position: relative;
  top: 25%;
  width: 100%;
  margin: 0.9375rem auto;
  padding: 0.9375rem 8%;
`;