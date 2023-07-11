import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import NavBar from '../NavBar';
import { HeaderContainer, LogoHeader } from './styles';

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
