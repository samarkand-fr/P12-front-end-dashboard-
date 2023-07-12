import React from 'react';
import PropTypes from 'prop-types';
import DailyStats from '../components/DailyStats';
import calories from '../assets/dailyStats/calories.png';
import protein from '../assets/dailyStats/protein.png';
import carbohydrates from '../assets/dailyStats/carbohydrates.png';
import lipids from '../assets/dailyStats/lipids.png';
import styled from 'styled-components';


const UserStatsCard = ({ userStatsData }) => {
  const formatNumber = (number) => {
    if (typeof number !== 'undefined') {
      return number.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return '';
  };

  return (
    <Container>
      <ChartsVertical >
        {/* CALORIES */}
        <DailyStats
          data={formatNumber(userStatsData.calorieCount / 1000)}
          icon={calories}
          unit="kCal"
          name="Calories"
          color="#FBECED"
        />
        {/* PROTEIN */}
        <DailyStats
          data={userStatsData.proteinCount}
          icon={protein}
          unit="g"
          name="Protéines"
          color="#FBE9E9"
        />
        {/* CARBOHYDRATES */}
        <DailyStats
          data={userStatsData.carbohydrateCount}
          icon={carbohydrates}
          unit="g"
          name="Glucides"
          color="#FBE6E6"
        />
        {/* LIPIDS */}
        <DailyStats
          data={userStatsData.lipidCount}
          icon={lipids}
          unit="g"
          name="Lipides"
          color="#FBE3E3"
        />
      </ChartsVertical>
    </Container>
  );
};

UserStatsCard.propTypes = {
  userStatsData: PropTypes.object,
};

export default UserStatsCard;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  
`;

const ChartsVertical = styled.section`
display: flex;
flex-direction: column;
height: auto;
justify-content: space-between;
left: 55rem;
position: absolute;
top: 15%;
`;