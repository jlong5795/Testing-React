import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

test('Renders the StarWarsCharacters component with a Previous and Next button', () => {
    const { getByText } = render(<StarWarsCharacters />);

    getByText(/previous/i);
    getByText(/next/i);
});

test('Previous and Next buttons onClick perform as expected', () => {
    const { getByText } = render(<StarWarsCharacters />);

    const prevButton = getByText(/previous/i);
    const nextButton = getByText(/next/i);

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
    wait(() => {
        expect(mockGetData).toHaveBeenCalledTimes(1)
    },[]);
});