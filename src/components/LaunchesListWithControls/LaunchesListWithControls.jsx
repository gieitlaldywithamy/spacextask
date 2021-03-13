import React from 'react';
import { ListWithControls, Controls } from './LaunchesListWithControls.styled';
import { YearFilter, Button, LaunchList } from '../index';
import useFetchLaunches from '../../hooks/useFetchLaunches';

const LaunchesListWithControls = () => {
    const { isLoading, error, data } = useFetchLaunches();
    if ( isLoading ) return '...Loading'; //TBF Loading component
    if (error) return 'An error has occurred: ' + error.message; //TBF Error component
    const launches = Array.from(data);
    return (
        <ListWithControls>
            <Controls>
                <YearFilter/>
                <Button text='Sort'/>
            </Controls>
            <LaunchList launches={launches}/>
        </ListWithControls>
    )
};

export default LaunchesListWithControls;