import React from 'react';
import {
    render, screen, getAllByRole, within, fireEvent, waitFor,
} from '@testing-library/react';
import moment from 'moment';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '../../theme/theme';
import { LaunchesListWithControls } from '..';

const queryClient = new QueryClient();

const mockLaunches = [
    {
        flight_number: 1,
        mission_name: 'Mission 1',
        launch_date_utc: '2007-03-21T01:10:00.000Z',
        launch_date_unix: 1174439400,
        rocket: {
            rocket_name: 'Rocket name',
        },
        launch_year: '2007',
    },
    {
        flight_number: 2,
        mission_name: 'Mission 2006',
        launch_date_utc: '2006-03-24T22:30:00.000Z',
        launch_date_unix: 1143239400,
        rocket: {
            rocket_name: 'Rocket in 2006',
        },
        launch_year: '2006',
    }
];

jest.mock('../../hooks/useFetchLaunches', () => ({
    __esModule: true,
    default: () => ({
        isLoading: false,
        error: false,
        data: mockLaunches,
    }),
}));

const setup = (props) => render(
    <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
            <LaunchesListWithControls {...props} theme={theme}></LaunchesListWithControls>
        </QueryClientProvider>
    </ThemeProvider>
);

const mockOnClick = jest.fn();

describe('LaunchesListWithControls', () => {
    beforeEach(() => {
        setup({
            text: 'Button Text',
            altText: 'Button functional label',
            onClick: mockOnClick,
        })
    });

    test('should render sort button', () => {
        const button = screen.getByRole('button', { name: /Sort Descending/});
        expect(button).toBeInTheDocument();
    });

    test('should render filter by year dropdown', () => {
        const button = screen.getByRole('option', { name: /Filter By Year/});
        expect(button).toBeInTheDocument();
    });

    test('should render list of launches', () => {
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(mockLaunches.length);
    });

    test('should filter launches by year when user selects year', async () => {
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(mockLaunches.length);
        const mockLaunch2007 = mockLaunches[0];
        const mockLaunch2007FormattedDate = moment(mockLaunch2007.launch_date_utc).format("Do MMMM YYYY");
        fireEvent.change(screen.getByTestId('select'), {
            target: { value: '2006' }, 
        });
        const listItemsFiltered = screen.getAllByRole('listitem');
        expect(listItemsFiltered).toHaveLength(1);
        const listItem = listItemsFiltered[0];
        expect(within(listItem).queryByText('#' + mockLaunch2007.flight_number)).not.toBeInTheDocument();
        expect(within(listItem).queryByText(mockLaunch2007.mission_name)).not.toBeInTheDocument();
        expect(within(listItem).queryByText(mockLaunch2007FormattedDate)).not.toBeInTheDocument();
        expect(within(listItem).queryByText(mockLaunch2007.rocket.rocket_name)).not.toBeInTheDocument();
    });

});