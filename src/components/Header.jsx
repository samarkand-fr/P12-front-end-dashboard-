import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import NavBar from './NavBar';
import styled from 'styled-components';

/**
 * Renders the header section of the webpage.
 * @component
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoHeader src={logo} alt="logoHeader" />
      </Link>
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  align-items: center;
  background: #020203;
  box-shadow: 0 .25rem .25rem rgba(0, 0, 0, 0.25);
  display: flex;
  height: 5rem;
  justify-content: space-between;
  width: 100%;
`;

const LogoHeader = styled.img`
  margin-left: 2rem;
`;