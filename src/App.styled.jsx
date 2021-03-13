import styled from "styled-components";

export const AppContainer = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.darkGreyColor};
    padding: 2em;
    padding-right: 0;
`;

export const MainContainer = styled.div`
    display: flex;
`;