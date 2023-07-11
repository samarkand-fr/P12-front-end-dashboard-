import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiService from '../../utils/Api/ApiService';
import ChartRadar from '../../components/Charts/ChartRadar';

import { PerformanceRadarChartContainer } from './styles';

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
