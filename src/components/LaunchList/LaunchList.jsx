import React from 'react';
import PropTypes from 'prop-types';
import { LaunchListItem } from '../index';
import { List } from './LaunchList.styled';

const LaunchList = ({ launches, sortDescending, yearFilter }) => {

    console.log(yearFilter);
    console.log(sortDescending);
    launches = launches.filter((launch) => {
        return !yearFilter ? true : launch.launch_year === yearFilter;
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
};

export default LaunchList;