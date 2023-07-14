import React from 'react';
import PropTypes from 'prop-types';
import ChartPie from '../components/Charts/ChartPie';
import styled from 'styled-components';

/**
 * GoalScores component.
 * @param {Object} props - The component props.
 * @param {Array} props.goalScoreData - The goal score data.
 * @param {number} props.goalScorePercentage - The goal score percentage.
 * @returns {JSX.Element} - The rendered component.
 */
const GoalScores = ({ goalScoreData, goalScorePercentage }) => {
  return (
    <HorizontalContainer>
      <GoalPieChartContainer>
        <GoalPieChartTitle>Score</GoalPieChartTitle>
        <ChartPie goalScoreData={goalScoreData} />
        <GoalPieChartInfos>
          <GoalPieChartScoreValue>{goalScorePercentage}%</GoalPieChartScoreValue>
          <br />
          de votre
          <br />
          objectif
        </GoalPieChartInfos>
      </GoalPieChartContainer>
    </HorizontalContainer>
  );
};

GoalScores.propTypes = {
  goalScoreData: PropTypes.array,
  goalScorePercentage: PropTypes.number,
};

export default GoalScores;

/**
 *  styled components.
 */
const HorizontalContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const GoalPieChartContainer = styled.article`
  align-items: center;
  background: #FBFBFB;
  border-radius: .3125rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.0212249);
  display: flex;
  height: 13.5rem;
  justify-content: center;
  position: relative;
  width: 13.5rem;

`;

const GoalPieChartTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  left: 2rem;
  margin: 0;
  position: absolute;
  top: 1.5rem;

`;

const GoalPieChartInfos = styled.div`
  font-size: 1rem;
  position: absolute;
  text-align: center;
`;

const GoalPieChartScoreValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;
