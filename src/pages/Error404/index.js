import React from 'react';
import { Error404Container, Error404Header, Error404Logo, Error404Background, Error404Content, Error404Body, Error404Img, Error404Link } from './styles';
import logo from '../../assets/logo/logo.png';
import error404 from '../../assets/error404/error404.jpeg';

const Error404 = () => {
  return (
    <Error404Container>
      <Error404Header>
        <Error404Logo src={logo} alt='error404Logo' />
      </Error404Header>
      <Error404Background>
        <Error404Content>
          <Error404Body>
            <Error404Img src={error404} alt="404..." />
            <h3>La page que vous recherchez semble introuvable.</h3>
            <Error404Link to='/'>
              Retour
            </Error404Link>
          </Error404Body>
        </Error404Content>
      </Error404Background>
    </Error404Container>
  );
};

export default Error404;
