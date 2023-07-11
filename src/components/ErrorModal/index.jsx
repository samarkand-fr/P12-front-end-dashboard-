import React from 'react';
import {ErrorBackground,ErrorTitle,ErrorContent} from './styles';


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
