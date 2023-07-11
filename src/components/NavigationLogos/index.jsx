import React from 'react';
import PropTypes from 'prop-types';
import { IconLink, IconImage } from './styles';

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
