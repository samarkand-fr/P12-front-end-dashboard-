import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DailyStat = ({ data, icon, unit, name }) => {
  return (
    <Container>
      <StatContainerImg className={`dailyStatContainerImg ${name}`}>
        <StatImg className={`dailyStatImg ${name}`} src={icon} alt="" />
      </StatContainerImg>
      <StatTxt>
        <StatQuantity>{data} {unit}</StatQuantity>
        <StatType>{name}</StatType>
      </StatTxt>
    </Container>
  );
};

DailyStat.propTypes = {
  data: PropTypes.string,
  icon: PropTypes.string,
  unit: PropTypes.string,
  name: PropTypes.string,
};

export default DailyStat;


const Container = styled.div`
  align-items: center;
  background: #FBFBFB;
  border-radius: .3125rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.0212249);
  display: flex;
  height: 7.75rem;
  justify-content: space-evenly;
  width: 16.125rem;
  margin-top: 55px;

  @media (min-width: 1024px) and (max-width: 1400px) {
    height: 5.625rem;
    width: 11.25rem;
  }
`;

const StatContainerImg = styled.div`
  align-items: center;
  border-radius: .375rem;
  display: flex;
  height: 3.75rem;
  justify-content: center;
  width: 3.75rem;

  &.Calories {
    background-color: #FBECED;
  }

  &.Glucides {
    background-color: #FCF6E3;
  }

  &.Lipides {
    background-color: #FFE9EF;
  }

  &.Protéines {
    background-color: #E6F5FC;
  }

  @media (min-width: 1024px) and (max-width: 1400px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const StatImg = styled.img`
  /* Add any additional styles for the icon image if needed */
`;

const StatTxt = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatQuantity = styled.p`
  font-size: 1.25rem;
  font-weight: 700;

  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: .8rem;
  }
`;

const StatType = styled.p`
  color: #74798C;
  font-size: .875rem;
  font-weight: 500;

  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: .7rem;
  }
`;
