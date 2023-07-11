import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const NamesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;
  margin-top: 2rem;
`;

export const WelcomeMessage = styled.h1`
   color :black;
   opacity:0.7;
   margin-top: -5rem;
`

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e60000;
  border-radius: 50%;
  color: #000;
  font-size: 2.5rem;
  width: 16rem;
  height: 16rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ff0000; /* Change the background color on hover */
    color: #ffffff; /* Change the font color on hover */
  }

  &:active {
    background-color: #ff0000; /* Change the background color on click */
    color: #000000; /* Change the font color on click */
  }
`;

export const NameLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
`;
