import styled from "styled-components";

export const ListWithControls = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`;

export const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
    & > button {
        margin-left: 1%;
    }
`;
