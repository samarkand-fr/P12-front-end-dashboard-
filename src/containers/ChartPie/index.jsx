import React from 'react';
import PropTypes from 'prop-types';
import ChartPie from '../../components/Charts/ChartPie';
import { HorizontalContainer, GoalPieChartContainer, GoalPieChartTitle, GoalPieChartInfos, GoalPieChartScoreValue } from './styles';

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
