import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Renders the navigation logo component.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.logo - The logo image sourceo of iconSideNavBar
 * @returns {JSX.Element} The rendered NavigationLogo component.
 */
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
