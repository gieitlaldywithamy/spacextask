import React from 'react';
import PropTypes from 'prop-types';
import { LaunchListItem } from '../index';
import { List } from './LaunchList.styled';

const LaunchList = ({ launches, sortDescending, yearToFilterBy }) => {
    launches = launches.filter((launch) => {
        return yearToFilterBy < 1 ? true : launch.launch_year === yearToFilterBy;
    }).sort((launch, launchNext) => {
        const launchTime = launch.launch_date_unix;
        const launchTimeNext = launchNext.launch_date_unix;
        return sortDescending ? launchTimeNext - launchTime : launchTime - launchTimeNext;
    });

    return (
        <List>
        {launches.map(launch => (
            <LaunchListItem
                key={launch.launch_date_utc + launch.flight_number}
                flightNumber={launch.flight_number}
                missionName={launch.mission_name}
                launchDate={launch.launch_date_utc}
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
            launch_date_unix: PropTypes.number.isRequired,
            rocket: PropTypes.shape({
                rocket_name: PropTypes.string.isRequired,
            })
        })
    ).isRequired,
    sortDescending: PropTypes.bool.isRequired,
    yearToFilterBy: PropTypes.string.isRequired,
};

export default LaunchList;