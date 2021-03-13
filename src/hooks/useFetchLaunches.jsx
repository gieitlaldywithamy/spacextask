import { useQuery } from 'react-query';
import axios from 'axios';

const getLaunches = async () => {
    const { data } = await axios.get(
        'https://api.spacexdata.com/v3/launches'
    );
    return data;
}

export default function useFetchLaunches() {
    return useQuery('launches', getLaunches, {
        staleTime: Infinity,
    });
}