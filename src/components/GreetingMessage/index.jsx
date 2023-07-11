import PropTypes from 'prop-types';
import React from 'react';
import {GreetingSection,
        GreetingTitle,
        GreetingColoredText,
        GreetingText } from './styles';

function GreetingMessage({ GreetingData }) {
  console.log(GreetingData);
  return (
    <GreetingSection>
      <GreetingTitle>
        Bonjour <GreetingColoredText>{GreetingData}</GreetingColoredText>
      </GreetingTitle>
      <GreetingText>Félicitation ! Vous avez explosé vos objectifs hier 👏</GreetingText>
    </GreetingSection>
  );
}

GreetingMessage.propTypes = {
  GreetingData: PropTypes.string,
};

export default GreetingMessage;
