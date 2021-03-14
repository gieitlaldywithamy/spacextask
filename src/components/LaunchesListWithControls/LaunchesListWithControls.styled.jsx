import styled from "styled-components";

export const ListWithControls = styled.section`
    width: 60%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1350px) {
        width: 100%;
    }
`;

export const LaunchListPlaceholder = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 1%;
    & > button {
        margin-left: 1%;
    }
`;
