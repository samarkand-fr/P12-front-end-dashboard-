import styled from 'styled-components';

export const BarChartContainer = styled.section`
  align-items: center;
  background: #FBFBFB;
  border-radius: .3125rem;
  box-shadow: .25rem .125rem .25rem rgba(0, 0, 0, 0.0212249);
  display: flex;
  flex-direction: column;
  height: 20rem;
  margin-bottom: 2rem;
  padding: 1.5rem 1.875rem;
`;

export const BarChartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BarChartTitle = styled.h2`
  color: #20253A;
  font-size: .9375rem;
  margin-left: 2.5rem;
  margin-bottom: 35px;
`;

export const BarChartLegend = styled.div`
  display: flex;
  margin-right: 45px;
  margin-bottom: 30px;
`;

export const CircleIcon = styled.i`
  font-size: .625rem;
  margin-right: .8rem;
`;
export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;
  
`;

export const BlackCircle = styled(Circle)`
  background-color: #000;
`;

export const RedCircle = styled(Circle)`
  background-color: #e60000;
`;

export const HeaderElement = styled.div`
  align-items: center;
  color: #74798c;
  display: flex;
  font-weight: 500;
  margin-left: 1.875rem;
`;
