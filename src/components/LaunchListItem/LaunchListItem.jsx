import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { LaunchInfo, FlightNumber, MissionName, FlightSummary, LaunchDate, RocketName } from './LaunchListItem.styled';

const ListItem = ({ flightNumber, missionName, launchDate, rocketName }) => {
    const strFormattedDate = moment(launchDate).format("Do MMMM YYYY");
    return (
        <LaunchInfo>
            <FlightNumber>#{flightNumber}</FlightNumber>
            <MissionName>{missionName}</MissionName>
            <FlightSummary>
                <LaunchDate>{strFormattedDate}</LaunchDate>
                <RocketName>{rocketName}</RocketName>
            </FlightSummary>
        </LaunchInfo>
    )
};

ListItem.propTypes = {
    flightNumber: PropTypes.string.isRequired,
    missionName: PropTypes.number.isRequired,
    launchDate: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
};

export default ListItem;