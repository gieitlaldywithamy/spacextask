import styled from "styled-components";

export const YearSelector = styled.select`
    background-color: ${props => props.theme.blueColor};
    font-weight: ${props => props.theme.bold};
    color: #fff;
    width: 12em;
    height: 3em;
    padding-left: 1em;
    &:active,
    &:focus {
        outline: none;
    }
`;