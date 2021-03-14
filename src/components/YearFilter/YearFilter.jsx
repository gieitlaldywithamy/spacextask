import React from 'react';
import PropTypes from 'prop-types';
import useFetchLaunches from '../../hooks/useFetchLaunches';
import { YearSelector } from './YearFilter.styled';

const YearFilter = ({ selectedYear, setYear }) => {
    const { isLoading, data } = useFetchLaunches();

    const onChange = (newSelection) => {
        if (newSelection.target.value === 0) {
            setYear(false);
            return;
        }
        setYear(newSelection.target.value);
    };

    const createYears = (data) => {
        return [...new Set(data.map(launch => launch.launch_year))];
    };

    return (
        <YearSelector
            onChange={onChange}
            value={selectedYear ? selectedYear : '0'}
        >
        <option value={'0'}>Filter By Year</option>
        {!isLoading && createYears(data).map((year) => (
            <option key={year} value={year}>{year}</option>
        ))}
        </YearSelector>
    );
};

YearFilter.defaultProps = {
    selectedYear: '0',
}

YearFilter.propTypes = {
    selectedYear: PropTypes.string,
    setYear: PropTypes.func.isRequired,
};

export default YearFilter;