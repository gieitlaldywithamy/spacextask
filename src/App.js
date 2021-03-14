import React from 'react';
import DocumentTitle from 'react-document-title';
import { AppContainer, HeaderContainer, MainContainer } from './App.styled';
import { Logo, Button, SplashImage, LaunchesListWithControls } from './components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SPACEX_API_LAUNCHES_KEY } from './constants/apiConstants';
import refresh from './assets/icon/refresh.png';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <DocumentTitle title="SpaceX Launches">
                    <AppContainer>
                        <HeaderContainer>
                            <Logo />
                            <Button 
                                onClick={() => queryClient.invalidateQueries(SPACEX_API_LAUNCHES_KEY)}
                                text='Reload Data'
                                alt='Reload Icon'
                                src={refresh}
                                curved
                            />
                        </HeaderContainer>
                        <MainContainer>
                            <SplashImage />
                            <LaunchesListWithControls theme={theme}/>
                        </MainContainer>
                    </AppContainer>
                </DocumentTitle>
            </ThemeProvider>
        </QueryClientProvider>
  );
}

export default App;
