import React from 'react';
import { AppContainer, MainContainer } from './App.styled';
import { Header } from './containers/index';
import { Logo, Button, SplashImage, LaunchesListWithControls } from './components';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
  );
}

export default App;
