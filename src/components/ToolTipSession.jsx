import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TooltipSessions = ({ payload, active }) => {
  if (active && payload) {
    return <TooltipLineChart>{`${payload[0].value} min`}</TooltipLineChart>;
  }
  return null;
};

TooltipSessions.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default TooltipSessions;


const TooltipLineChart = styled.p`
  background: #fff;
  border-radius: 0.3125rem;
  color: #000;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem;
`;
