import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavigationLogo({ logo }) {
  return (
    <IconLink to="/">
      <IconImage src={logo} alt="iconSideNavBar" />
    </IconLink>
  );
}

NavigationLogo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default NavigationLogo;


const IconLink = styled(Link)`
  display: block;
`;

const IconImage = styled.img`
  width: 100%;
  height: auto;
`;
