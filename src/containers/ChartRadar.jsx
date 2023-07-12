import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiService from '../utils/Api/ApiService';
import ChartRadar from '../components/Charts/ChartRadar';
import styled from 'styled-components';

/**
 * PerformanceAverage component.
 * @param {Object} props - The component props.
 * @param {string} props.id - The user ID.
 * @returns {JSX.Element} - The rendered component.
 */
const PerformanceAverage = ({ id }) => {
  const [performanceAverageData, setPerformanceAverageData] = useState([]);

  useEffect(() => {
    // Create an instance of ApiService
    const apiService = new ApiService();
  
    // Fetch the user performance data
    apiService.getUserPerformanceData(id)
      .then((response) => {
        // Reverse the data array if it's an array, otherwise use it as-is
        const reversedData = Array.isArray(response) ? response.reverse() : response;
         // Update the state variables with the received data
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

/**
 * styled component.
 */
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
