import React from 'react';
import bike from '../assets/sideNavBar/bike.png';
import IconSideNavBar from './NavigationLogos';
import swim from '../assets/sideNavBar/swim.png';
import weight from '../assets/sideNavBar/weight.png';
import yoga from '../assets/sideNavBar/yoga.png';
import styled from 'styled-components';

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarUlContainer>
        <BorderLogoSideBar>
          <IconSideNavBar logo={yoga} />
        </BorderLogoSideBar>
        <BorderLogoSideBar>
          <IconSideNavBar logo={swim} />
        </BorderLogoSideBar>
        <BorderLogoSideBar>
          <IconSideNavBar logo={bike} />
        </BorderLogoSideBar>
        <BorderLogoSideBar>
          <IconSideNavBar logo={weight} />
        </BorderLogoSideBar>
      </SideBarUlContainer>
      <Copyright>
        <h3>Copyright, SportSee 2021</h3>
      </Copyright>
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.section`
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

const SideBarUlContainer  = styled.ul`
list-style-type: none;
padding: 0;
`;

const Copyright = styled.div`
  font-size: .8rem;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
`;

const BorderLogoSideBar = styled.li`
  align-items: center;
  background: #FFF;
  border-radius: .375rem;
  display: flex;
  height: 4rem;
  justify-content: center;
  margin-bottom: 2rem;
  width: 4rem;
`;