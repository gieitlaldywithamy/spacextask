import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListWithControls, Controls, LaunchListPlaceholder } from './LaunchesListWithControls.styled';
import { YearFilter, Button, LaunchList } from '../index';
import useFetchLaunches from '../../hooks/useFetchLaunches';
import sortIcon from '../../assets/icon/sort.png';
import Loader from 'react-loader-spinner';

const LaunchesListWithControls = ({ theme }) => {
    const { isLoading, error, data } = useFetchLaunches();

    const [descending, setDescending] = useState(false);
    const [selectedYear, setSelectedYear] = useState('0');

    return (
        <ListWithControls>
            <Controls>
                <YearFilter
                    setYear={setSelectedYear}
                    selectedYear={selectedYear}
                />
                <Button
                    text={descending ? 'Sort Ascending': 'Sort Descending'}
                    src={sortIcon}
                    altText='sort button'
                    onClick={() => setDescending(!descending)}
                />
            </Controls>
            { error && <div>Error</div> }
            { isLoading ? (
                <LaunchListPlaceholder>
                    <Loader type="Circles" color={theme.blueColor}/>
                </LaunchListPlaceholder>
            ) : (
                <LaunchList
                    launches={Array.from(data)}
                    yearToFilterBy={selectedYear}
                    sortDescending={descending}
                />
            ) }
        </ListWithControls>
    )
};

LaunchesListWithControls.propTypes = {
    theme: PropTypes.shape({
        blueColor: PropTypes.string.isRequired,
    }).isRequired,
};

export default LaunchesListWithControls;