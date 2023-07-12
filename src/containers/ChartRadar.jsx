import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiService from '../utils/Api/ApiService';
import ChartRadar from '../components/Charts/ChartRadar';
import styled from 'styled-components';

const PerformanceAverage = ({ id }) => {
  const [performanceAverageData, setPerformanceAverageData] = useState([]);

  useEffect(() => {
    const apiService = new ApiService();
  
    apiService
    .getUserPerformanceData(id)
    .then((response) => {
      const reversedData = Array.isArray(response) ? response.reverse() : response;
      setPerformanceAverageData(reversedData);
    });
  }, [id]);
  
  return (
    <PerformanceRadarChartContainer>
       <ChartRadar performanceAverageData={performanceAverageData} />
    </PerformanceRadarChartContainer>
  );
};

PerformanceAverage.propTypes = {
  id: PropTypes.string,
};

export default PerformanceAverage;


const PerformanceRadarChartContainer = styled.article`
  align-items: center;
  background-color: #282D30;
  border-radius: .3125rem;
  display: flex;
  height: 16.4375rem;
  text-align: center;
  width: 16.125rem;

  @media (min-width: 1024px) and (max-width: 1400px) {
    height: 13rem;
    width: 13rem;
    margin-top:1rem
  }
`;