import React from 'react';
import PropTypes from 'prop-types';
import { TooltipLineChart } from './styles';

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
