import React from 'react';
import useFetchLaunches from '../../hooks/useFetchLaunches';
import Dropdown from 'react-dropdown';

const YearFilter = ({ setYear }) => {
    const { isLoading, error, data } = useFetchLaunches();
    const onChange = (newSelection) => {
        setYear(newSelection.value);
    }
    if (isLoading) return '...Loading'; //TBF Loading component
    if (error) return 'An error has occurred: ' + error.message; //TBF Error component
    const years = [...new Set(data.map(launch => launch.launch_year))];
    return (
        <Dropdown options={years} onChange={onChange} value={'Year Filter'}></Dropdown>
    );
};

export default YearFilter;