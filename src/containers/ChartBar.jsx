import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiService from '../utils/Api/ApiService';
import ChartBar from '../components/Charts/ChartBar';
import styled from 'styled-components';

const DailyActivity = ({ id }) => {
  const [dailyActivityData, setDailyActivityData] = useState([]);
  const [minKgAxis, setminKgAxis] = useState(0);
  const [maxKgAxis, setmaxKgAxis] = useState(0);
  const [minKcalAxis, setminKcalAxis] = useState(0);
  const [maxKcalAxis, setmaxKcalAxis] = useState(0);

  useEffect(() => {
    const apiService = new ApiService();
    
    apiService
    .getUserDailyActivityData(id)
    .then((response) => {
      setDailyActivityData(response.data);
      setminKgAxis(response.minKgAxis);
      setmaxKgAxis(response.maxKgAxis);
      setminKcalAxis(response.minKcalAxis);
      setmaxKcalAxis(response.maxKcalAxis);
    });
  }, [id]);

 
  return (
    <BarChartContainer>
      <BarChartHeader>
        <BarChartTitle>Activité quotidienne</BarChartTitle>
        <BarChartLegend>
          <HeaderElement>
            <BlackCircle />
            <span>Poids (kg)</span>
          </HeaderElement>
          <HeaderElement>
            <RedCircle />
            <span>Calories brûlées (kCal)</span>
          </HeaderElement>
        </BarChartLegend>
      </BarChartHeader>
      <ChartBar
        dailyActivityData={dailyActivityData}
        minKgAxis={minKgAxis}
        maxKgAxis={maxKgAxis}
        minKcalAxis={minKcalAxis}
        maxKcalAxis={maxKcalAxis}
      />
    </BarChartContainer>
  );
};

DailyActivity.propTypes = {
  id: PropTypes.string,
};

export default DailyActivity;


const BarChartContainer = styled.section`
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

const BarChartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BarChartTitle = styled.h2`
  color: #20253A;
  font-size: .9375rem;
  margin-left: 2.5rem;
  margin-bottom: 35px;
`;

const BarChartLegend = styled.div`
  display: flex;
  margin-right: 45px;
  margin-bottom: 30px;
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 10px;
  
`;

const BlackCircle = styled(Circle)`
  background-color: #000;
`;

const RedCircle = styled(Circle)`
  background-color: #e60000;
`;

const HeaderElement = styled.div`
  align-items: center;
  color: #74798c;
  display: flex;
  font-weight: 500;
  margin-left: 1.875rem;
`;
