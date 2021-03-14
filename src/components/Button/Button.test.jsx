import React from 'react';
import {
    render, screen, fireEvent,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import Button from './Button';

const setup = (props) => render(
    <ThemeProvider theme={theme}>
        <Button {...props} ></Button>
    </ThemeProvider>
);

const mockOnClick = jest.fn();

describe('Button', () => {
    beforeEach(() => {
        setup({
            text: 'Button Text',
            altText: 'Button functional label',
            onClick: mockOnClick,
        })
    });

    test('should render with text as label', () => {
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Button Text');
    });

    test('when clicked should fire onclick', () => {
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalled();
    });
})