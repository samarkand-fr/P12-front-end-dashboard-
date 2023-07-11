import styled from 'styled-components';

export const SideBarContainer = styled.section`
  align-items: center;
  background: #020203;
  box-shadow: 0 .25rem .25rem rgba(0, 0, 0, 0.25);
  color: #FFF;
  display: flex;
  flex-direction: column;
  height: 64rem;
  justify-content: space-around;
  width: 7.3125rem;
`;

export const SideBarUlContainer  = styled.ul`
list-style-type: none;
padding: 0;
`;

export const Copyright = styled.div`
  font-size: .8rem;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
`;

export const BorderLogoSideBar = styled.li`
  align-items: center;
  background: #FFF;
  border-radius: .375rem;
  display: flex;
  height: 4rem;
  justify-content: center;
  margin-bottom: 2rem;
  width: 4rem;
`;