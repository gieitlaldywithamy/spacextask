import styled from "styled-components";

export const YearSelector = styled.select`
    background-color: ${props => props.theme.blueColor};
    font-family: 'Brandon Grotesque Bold';
    font-size: ${props => props.theme.smallFontSize};
    color: #fff;
    width: 10em;
    height: 2.5em;
    padding-left: 1em;
    &:active,
    &:focus {
        outline: none;
    }
`;