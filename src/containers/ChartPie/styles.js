import styled from 'styled-components';
export const HorizontalContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const GoalPieChartContainer = styled.article`
  align-items: center;
  background: #FBFBFB;
  border-radius: .3125rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.0212249);
  display: flex;
  height: 16.4375rem;
  justify-content: center;
  position: relative;
  width: 16.125rem;

  @media (min-width: 1024px) and (max-width: 1400px) {
    height: 11rem;
    width: 11rem;
  }
`;

export const GoalPieChartTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  left: 2rem;
  margin: 0;
  position: absolute;
  top: 1.5rem;

  @media (min-width: 1024px) and (max-width: 1400px) {
    display: none;
  }
`;

export const GoalPieChartInfos = styled.div`
  font-size: 1rem;
  position: absolute;
  text-align: center;
`;

export const GoalPieChartScoreValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;
