import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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


const TooltipContainer = styled.div`export 
  display: flex;
  flex-direction: column;
`;

const TooltipLine = styled.p`
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  margin: 0;
  padding: 0.5rem;
  background-color: ${({ color }) => color};
`;

