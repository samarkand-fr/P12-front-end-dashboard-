import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Error404Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error404Header = styled.header`
  margin-top: 2rem;
`;

export const Error404Logo = styled.img`
  width: 10rem;
  margin: 2rem;
`;

export const Error404Background = styled.section`
  background-color: rgba(26, 39, 156, 0.4);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Error404Content = styled.div`
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

export const Error404Body = styled.div`
  margin: 0.9375rem auto;
  padding: 0.9375rem 8%;
`;

export const Error404Img = styled.img`
  border-radius: 0.625rem;
  width: 100%;
`;

export const Error404Link = styled(Link)`
  color: #e60000;
  text-decoration: none;
`;
