import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavMenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-left: 8rem;
  margin-right: 4rem;
  width: 100%;
`;

export const NavLink = styled(Link)`
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
