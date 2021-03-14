import styled from "styled-components";

export const AppContainer = styled.div`
    height: 100vh;
    overflow-y: hidden;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.darkGreyColor};
`;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 10vh;
    padding-left: 5vw;
    padding-top: 3vh;
`;

export const MainContainer = styled.main`
    display: flex;
    padding-left: 5vw;
    padding-right: 3vw;
    height: 90vh;
`;