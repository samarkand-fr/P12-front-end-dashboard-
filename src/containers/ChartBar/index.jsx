import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiService from '../../utils/Api/ApiService';
import ChartBar from '../../components/Charts/ChartBar';
import { BarChartContainer, BarChartHeader, BarChartTitle, BarChartLegend, BlackCircle, RedCircle, HeaderElement } from './styles';

const DailyActivity = ({ id }) => {
  const [dailyActivityData, setDailyActivityData] = useState([]);
  const [minKgAxis, setminKgAxis] = useState(0);
  const [maxKgAxis, setmaxKgAxis] = useState(0);
  const [minKcalAxis, setminKcalAxis] = useState(0);
  const [maxKcalAxis, setmaxKcalAxis] = useState(0);

  useEffect(() => {
    const apiService = new ApiService();
    apiService.getUserDailyActivityData(id).then((response) => {
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
