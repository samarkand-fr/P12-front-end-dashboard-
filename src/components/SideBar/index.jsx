import React from 'react';
import bike from '../../assets/sideNavBar/bike.png';
import IconSideNavBar from '../NavigationLogos';
import swim from '../../assets/sideNavBar/swim.png';
import weight from '../../assets/sideNavBar/weight.png';
import yoga from '../../assets/sideNavBar/yoga.png';
import { BorderLogoSideBar, SideBarContainer, Copyright, SideBarUlContainer } from './styles';

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
