import React from 'react';
import { AppContainer, MainContainer } from './App.styled';
import { Header } from './containers/index';
import { Logo, Button, SplashImage, LaunchesListWithControls } from './components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SPACEX_API_LAUNCHES_KEY } from './constants/apiConstants';
import refreshSmall from './assets/icon/refresh.png';
import refreshMedium from './assets/icon/refresh.png';
import refreshLarge from './assets/icon/refresh.png';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppContainer>
                <Header>
                    <Logo />
                    <Button onClick={() => queryClient.invalidateQueries(SPACEX_API_LAUNCHES_KEY)} text='Refresh' iconRightSrcSet={`${refreshSmall} 300w, ${refreshMedium} 768w, ${refreshLarge} 1280w`}/>
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
