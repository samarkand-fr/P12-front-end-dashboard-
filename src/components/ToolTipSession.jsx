import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Renders a tooltip for sessions, displaying the duration in minutes.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.payload - The payload data for the tooltip.
 * @param {boolean} props.active - Indicates if the tooltip is active or not.
 * @returns {JSX.Element|null} The rendered TooltipSessions component.
 */
const TooltipSessions = ({ payload, active }) => {
  // Check if the tooltip should be active and if the payload exists
  if (active && payload) {
    // Render the tooltip line with the duration in minutes
    return <TooltipLineChart>{`${payload[0].value} min`}</TooltipLineChart>;
  }
  // If the tooltip should not be active or if the payload is missing, return null
  return null;
};

// Prop Types
TooltipSessions.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default TooltipSessions;



/**
 *  Styled component
 */

const TooltipLineChart = styled.p`
  background: #fff;
  border-radius: 0.3125rem;
  color: #000;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem;
`;
