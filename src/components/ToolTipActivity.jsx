import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Renders a tooltip container with lines of text.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.payload - The payload data for the tooltip lines.
 * @param {boolean} props.active - Indicates if the tooltip is active or not.
 * @returns {JSX.Element|null} The rendered TooltipActivity component.
 */
const TooltipActivity = ({ payload, active }) => {
    // Check if the tooltip should be active and if the payload exists
    if (active && payload) {
      // Render the tooltip container with two tooltip lines
      return (
        <TooltipContainer>
          <TooltipLine color="#000">
            {`${payload[0].value} kg`}
          </TooltipLine>
          <TooltipLine color="#e60000">
            {`${payload[1].value} kCal`}
          </TooltipLine>
        </TooltipContainer>
      );
    }
    // If the tooltip should not be active or if the payload is missing, return null
    return null;
  };
  
  // Prop Types
TooltipActivity.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

export default TooltipActivity;

// Styled components

const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
/**
 * Line of text for the tooltip.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.color - The color of the tooltip line.
 * @returns {JSX.Element} The rendered TooltipLine component.
 */
const TooltipLine = styled.p`
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  margin: 0;
  padding: 0.5rem;
  background-color: ${({ color }) => color};
`;

