import styled from 'styled-components';

export const LaunchInfo = styled.li`
    padding: 0.5em 1.5em 0.5em 1.5em;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 25%);
    border-radius: 10px;
    font-weight: 500;
`;

export const FlightNumber = styled.div`
    font-size: ${props => props.theme.largeFontSize};
`;

export const MissionName = styled.div`
    font-size: ${props => props.theme.largeFontSize};
`;

export const FlightSummary = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`;

export const LaunchDate = styled.div`
    font-size: ${props => props.theme.mediumFontSize};
`;

export const RocketName = styled.div`
    font-size: 1.5em;
    font-weight: 700;
`;