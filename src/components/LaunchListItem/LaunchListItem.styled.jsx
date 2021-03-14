import styled from 'styled-components';

export const LaunchInfo = styled.li`
    padding: 0.5em 1.5em 0.5em 1.5em;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 5px 1px rgb(0 0 0 / 25%);
    margin: 1vh 1vh 1vw 0;
    border-radius: 15px;
    font-weight: 500;
`;

export const FlightNumber = styled.div`
    font-size: ${props => props.theme.largeFontSize};
    width: 15%;
`;

export const MissionName = styled.div`
    font-size: ${props => props.theme.largeFontSize};
    width: 65%;
`;

export const FlightSummary = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    width: 20%;
`;

export const LaunchDate = styled.div`
    font-size: ${props => props.theme.smallFontSize};
    font-family: 'Brandon Grotesque Regular';
`;

export const RocketName = styled.div`
    font-size: ${props => props.theme.mediumFontSize};
`;