import styled from "styled-components";

export const LogoContainer = styled.div`
    height: 1.3em;
    & > img {
        height: 100%;
    }
`;

export const TextContainer = styled.span`
    margin-left: -5%;
    font-weight: ${props => props.theme.lightWeight};
    font-size: 1.2em;
    font-family: 'Brandon Grotesque Regular';
`;