import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * Renders the navigation menu component.
 * @component
 * @returns {JSX.Element} The rendered NavBar component.
 */

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

const NavMenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-left: 8rem;
  margin-right: 4rem;
  width: 100%;
`;

const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1.5rem;
  list-style: none;
  text-decoration: none;
  transition: all ease-in .9ms;

  &:hover {
    color: #e60000;
    transform: scale(1.05);
  }
`;
