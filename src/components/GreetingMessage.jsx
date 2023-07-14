import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

/**
 * Renders a greeting message component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.GreetingData - The greeting data to display.(user's name)
 * @returns {JSX.Element} The rendered GreetingMessage component.
 */
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


const GreetingSection = styled.section`
  margin-bottom: 1rem;
`;

const GreetingTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom:1.5rem;
  margin-top:2.8rem
`;

const GreetingText = styled.p`
  font-size: 1.05rem;
`;

const GreetingColoredText = styled.span`
  color: #e60000;
`;
