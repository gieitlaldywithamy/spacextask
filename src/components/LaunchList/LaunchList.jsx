import React from 'react';
import PropTypes from 'prop-types';
import { LaunchListItem } from '../index';
import { List } from './LaunchList.styled';

const LaunchList = ({launches}) => {
    return (
        <List>
        {launches.map(launch => (
            <LaunchListItem
                key={launch.launch_date_utc + launch.flight_number}
                flightNumber={launch.flight_number}
                missionName={launch.mission_name}
                date={launch.launch_date_utc}
                rocketName={launch.rocket.rocket_name}
            />
        ))}
        </List>
    )
};

LaunchList.propTypes = {
    launches: PropTypes.arrayOf(
        PropTypes.shape({
            flight_number: PropTypes.number.isRequired,
            mission_name: PropTypes.string.isRequired,
            launch_date_utc: PropTypes.string.isRequired,
            rocket: PropTypes.shape({
                rocket_name: PropTypes.string.isRequired,
            })
        })
    ).isRequired,
};

export default LaunchList;