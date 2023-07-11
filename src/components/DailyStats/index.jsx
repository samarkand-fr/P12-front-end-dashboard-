import React from 'react';
import PropTypes from 'prop-types';
import {Container, StatContainerImg, StatImg, StatTxt,StatQuantity, StatType} from './styles'


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


