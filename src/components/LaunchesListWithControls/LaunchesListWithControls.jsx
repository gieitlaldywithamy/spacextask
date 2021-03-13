import React, { useState } from 'react';
import { ListWithControls, Controls } from './LaunchesListWithControls.styled';
import { YearFilter, Button, LaunchList } from '../index';
import useFetchLaunches from '../../hooks/useFetchLaunches';
import sortIcon from '../../assets/icon/sort.png';

const LaunchesListWithControls = () => {
    const { isLoading, error, data } = useFetchLaunches();

    const [descending, setDescending] = useState(true);
    const [selectedYear, setSelectedYear] = useState(null);

    return (
        <ListWithControls>
            <Controls>
                <YearFilter
                    setYear={setSelectedYear}
                    selectedYear={selectedYear}
                />
                <Button
                    text='Sort Descending'
                    src={sortIcon}
                    alt='sort button'
                    onClick={() => setDescending(!descending)}
                />
            </Controls>
            { error && <div>Error</div> }
            { isLoading ? ( <div>...Loading</div> ) : ( 
                <LaunchList
                    launches={Array.from(data)}
                    yearFilter={selectedYear}
                    sortDescending={descending}
                />
            ) }
        </ListWithControls>
    )
};

export default LaunchesListWithControls;