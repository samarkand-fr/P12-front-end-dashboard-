
import styled from 'styled-components';

export const Container = styled.div`
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

export const StatContainerImg = styled.div`
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

export const StatTxt = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatQuantity = styled.p`
  font-size: 1.25rem;
  font-weight: 700;

  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: .8rem;
  }
`;

export const StatType = styled.p`
  color: #74798C;
  font-size: .875rem;
  font-weight: 500;

  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: .7rem;
  }
`;