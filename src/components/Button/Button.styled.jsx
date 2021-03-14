import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: ${props => props.theme.blueColor};
    font-family: 'Brandon Grotesque Bold';
    font-size: ${props => props.theme.smallFontSize};
    color: #fff;
    border-style: none;
    width: 10em;
    height: 2.5em;
    border-style: none;
    border-radius: ${props => props.curved ? '2vw 0 0 2vw' : '0'};
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
`;