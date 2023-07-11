import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ApiService from '../../utils/Api/ApiService';
import ChartLine from '../../components/Charts/ChartLine';
import {BarChartContainer, SessionsLineChartTitle} from './styles';

const SessionsAverage = ({ id }) => {
  const [userAverageData, setUserAverageData] = useState([]);

  useEffect(() => {
    const apiService = new ApiService();

    apiService
      .getUserAverageSessionData(id)
      .then((response) => {
        setUserAverageData(response);
      });
  }, [id]);

  return (
    <BarChartContainer>
        <>
          <header>
            <SessionsLineChartTitle >
              Durée moyenne des
              <br />
              sessions
            </SessionsLineChartTitle>
          </header>
          <ChartLine userAverageData={userAverageData} />
        </>
    </BarChartContainer>
  );
};

SessionsAverage.propTypes = {
  id: PropTypes.string,
};

export default SessionsAverage;




