import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiService from '../utils/Api/ApiService';
import GreetingMessage from '../components/GreetingMessage';
import DailyActivity from '../containers/ChartBar';
import SessionsAverage from '../containers/ChartLine';
import PerformanceAverage from '../containers/ChartRadar';
import GoalScores from '../containers/ChartPie';
import UserStatsCard from '../containers/UserStatsCard';
import ErrorModal from '../components/ErrorModal';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import styled from 'styled-components';

const DashBoard = ({ id }) => {
  const [greetingData, setGreetingData] = useState(null);
  const [goalScoreData, setGoalScoreData] = useState([]);
  const [goalScorePercentage, setGoalScorePercentage] = useState(0);
  const [userStatsData, setUserStatsData] = useState({});
  const [errorModal, setErrorModal] = useState(false);

  useEffect(() => {
    const apiService = new ApiService();
    apiService
      .getUserMainData(id)
      .then((response) => {
        setGreetingData(response.firstName);
        setGoalScoreData([
          { name: 'filled', value: response.userScore, fillColor: '#e60000' },
          { name: 'empty', value: 1 - response.userScore, fillColor: 'transparent' },
        ]);
        setGoalScorePercentage(response.userScore * 100);
        setUserStatsData({
          calorieCount: response.dailyStats?.calorieCount?.toString() || '',
          proteinCount: response.dailyStats?.proteinCount?.toString() || '',
          carbohydrateCount: response.dailyStats?.carbohydrateCount?.toString() || '',
          lipidCount: response.dailyStats?.lipidCount?.toString() || '',
        });
        setErrorModal(false);
      })
      .catch((error) => {
        setErrorModal(true);
      });
  }, [id]);

  return (
    <>
      <Header />
        <SideBar />
        <ChartContainer>
          {errorModal ? (
            <ErrorModal />
          ) : (
            <>
              <GreetingMessage GreetingData={greetingData} />
              <DailyActivity id={id} />
              <HorizontalContainer>
                <SessionsAverage id={id} />
                <PerformanceAverage id={id} />
                <GoalScores goalScoreData={goalScoreData} goalScorePercentage={goalScorePercentage} />
              </HorizontalContainer>
              <UserStatsCard userStatsData={userStatsData} />
            </>
          )}
        </ChartContainer>
    </>
  );
};

DashBoard.propTypes = {
  id: PropTypes.string,
};

export default DashBoard;

const ChartContainer = styled.section`
  display: flex;
  flex-direction: column;
  left: 15%;
  position: absolute;
  top: 9rem;
  width: 52.1875rem;
`;

const HorizontalContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  align-items: flex-start; 
`;