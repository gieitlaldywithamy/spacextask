import { useQuery } from 'react-query';
import axios from 'axios';
import { SPACEX_API_LAUNCHES, SPACEX_API_LAUNCHES_KEY } from '../constants/apiConstants';

const getLaunches = async () => {
    const { data } = await axios.get(SPACEX_API_LAUNCHES);
    return data;
}

export default function useFetchLaunches() {
    return useQuery(SPACEX_API_LAUNCHES_KEY, getLaunches, {
        staleTime: Infinity,
        notifyOnChangeProps: ['data', 'error'],
    });
}