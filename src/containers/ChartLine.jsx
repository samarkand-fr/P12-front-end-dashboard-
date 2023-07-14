import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiService from '../utils/Api/ApiService';
import ChartLine from '../components/Charts/ChartLine';
import styled from 'styled-components';

/**
 * SessionsAverage component.
 * @param {Object} props - The component props.
 * @param {string} props.id - The user ID.
 * @returns {JSX.Element} - The rendered component.
 */
const SessionsAverage = ({ id }) => {
  const [userAverageData, setUserAverageData] = useState([]);

  useEffect(() => {
    // Create an instance of ApiService
    const apiService = new ApiService();

    // Fetch the user average session data
    apiService.getUserAverageSessionData(id)
      .then((response) => {
         // Update the state variables with the received data
        setUserAverageData(response);
      });
  }, [id]);

  return (
    <ChartLineContainer>
      <>
        <SessionsLineChartTitle>
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

/**
 *  styled components.
 */
const ChartLineContainer = styled.article`
  align-items: center;
  display: flex;
  position: relative;
  
`;

const SessionsLineChartTitle = styled.h2`
  color: #FFF;
  font-size: 1rem;
  font-weight: 500;
  left: 2rem;
  margin: 0;
  position: absolute;
  top: 1.5rem;

`;
