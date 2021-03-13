import React from 'react';
import { ListWithControls, Controls } from './LaunchesListWithControls.styled';
import { YearFilter, Button, LaunchList } from '../index';

const LaunchesListWithControls = () => {
    return (
        <ListWithControls>
            <Controls>
                <YearFilter />
                <Button/>
            </Controls>
            <LaunchList />
        </ListWithControls>
    )
};

export default LaunchesListWithControls;