import styled from "styled-components";

export const SplashContainer = styled.div`
    width: 40%;
    @media only screen and (max-width: 1350px) {
        display: none;
    }
    padding-top: 5%;
    & > img {
        width: auto;
    }
`;
