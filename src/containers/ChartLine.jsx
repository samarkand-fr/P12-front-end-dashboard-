import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ApiService from '../utils/Api/ApiService';
import ChartLine from '../components/Charts/ChartLine';
import styled from 'styled-components';

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
    <ChartLineContainer>
        <>
          <SessionsLineChartTitle >
              Durée moyenne des
              <br />
              sessions
          </SessionsLineChartTitle>
          <ChartLine userAverageData={userAverageData} />
        </>
    </ChartLineContainer>
  );
};

SessionsAverage.propTypes = {
  id: PropTypes.string,
};

export default SessionsAverage;


const ChartLineContainer = styled.article`
    align-items: center;
    display: flex;
    position: relative;
    @media (min-width: 1024px) and (max-width: 1400px) {
        font-size: .8rem;
        left: 1.2rem;
        top: 1rem;
    }
`


const SessionsLineChartTitle = styled.h2`
    color: #FFF;
    font-size: 1rem;
    font-weight: 500;
    left: 2rem;
    margin: 0;
    position: absolute;
    top: 1.5rem;
  
}
`

