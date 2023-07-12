import React from 'react';
import logo from '../assets/logo/logo.png';
import error404 from '../assets/error404/error404.jpeg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Error404Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Error404Header = styled.header`
  margin-top: 2rem;
`;

const Error404Logo = styled.img`
  width: 10rem;
  margin: 2rem;
`;

const Error404Background = styled.section`
  background-color: rgba(26, 39, 156, 0.4);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const Error404Content = styled.div`
  background: #232323;
  border-radius: 0.625rem;
  color: #fff;
  margin: 5% auto;
  max-width: 31.25rem;
  overflow: hidden;
  padding-top: 0.625rem;
  position: relative;
  top: 15%;
  width: 100%;
`;

const Error404Body = styled.div`
  margin: 0.9375rem auto;
  padding: 0.9375rem 8%;
`;

const Error404Img = styled.img`
  border-radius: 0.625rem;
  width: 100%;
`;

const Error404Link = styled(Link)`
  color: #e60000;
  text-decoration: none;
`;
