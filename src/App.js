import React from 'react';
import { AppContainer, MainContainer } from './App.styled';
import { Header } from './containers/index';
import { Logo, Button, SplashImage, LaunchesListWithControls } from './components';


function App() {
    return (
        <AppContainer>
            <Header>
                <Logo />
                <Button/>
            </Header>
            <MainContainer>
                <SplashImage />
                <LaunchesListWithControls />
            </MainContainer>
        </AppContainer>
  );
}

export default App;
