import React from 'react';
import { NavMenuContainer, NavLink } from './styles';

const NavBar = () => {
  return (
    <NavMenuContainer>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/">Profil</NavLink>
      <NavLink to="/">Réglages</NavLink>
      <NavLink to="/">Communauté</NavLink>
    </NavMenuContainer>
  );
};

export default NavBar;

