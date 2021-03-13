import React, { useState, useEffect } from 'react';
import { ListWithControls, Controls } from './LaunchesListWithControls.styled';
import { YearFilter, Button, LaunchList } from '../index';
import useFetchLaunches from '../../hooks/useFetchLaunches';

const LaunchesListWithControls = () => {
    const { isLoading, error, data } = useFetchLaunches();

    // let launches = data;

    const [descending, setDescending] = useState(true);
    const [yearFilter, setYearFilter] = useState(null);

    // useEffect(() => {
    //     console.log(yearFilter);
    //     launches = Array.from(data).sort((launch, launchNext) => {
    //         const launchTime = launch.launch_date_unix;
    //         const launchTimeNext = launchNext.launch_date_unix;
    //         return descending ? launchTime - launchTimeNext : launchTimeNext - launchTime;
    //     });
    // }, [yearFilter]);

    return (
        <ListWithControls>
            <Controls>
                <YearFilter setYear={setYearFilter} />
                <Button text='Sort' onClick={() => setDescending(!descending)} />
            </Controls>
            { error && <div>Error</div> }
            { isLoading ? ( <div>...Loading</div> ) : ( 
                <LaunchList
                    launches={Array.from(data)}
                    yearFilter={yearFilter}
                    sortDescending={descending}
                /> ) }
        </ListWithControls>
    )
};

export default LaunchesListWithControls;