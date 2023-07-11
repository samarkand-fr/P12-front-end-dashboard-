import React from 'react';
import Header from "../../components/Header";
import { HomeContainer, NamesContainer, NameBox, NameLink ,WelcomeMessage} from './styles';

function Home() {
  return (
    <div>
      <Header />
      <HomeContainer>
      <WelcomeMessage>Bienvenue ! Connectez-vous à votre tableau de bord </WelcomeMessage>
        <NamesContainer>
          <NameBox>
            <NameLink to="/dashboard/12">Karl</NameLink>
          </NameBox>
          <NameBox>
            <NameLink to="/dashboard/18">Cecilia</NameLink>
          </NameBox>
        </NamesContainer>
      </HomeContainer>
    </div>
  );
}

export default Home;
