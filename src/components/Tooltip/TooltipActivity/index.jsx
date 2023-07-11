import React from 'react';
import PropTypes from 'prop-types';
import { TooltipContainer,TooltipLine } from './styles';

const TooltipActivity = ({ payload, active }) => {
  if (active && payload) {
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
  return null;
};

TooltipActivity.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

export default TooltipActivity;
