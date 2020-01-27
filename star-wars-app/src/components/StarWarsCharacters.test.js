import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { getData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

test('Renders the StarWarsCharacters component with a Previous and Next button', () => {
    const { getByText } = render(<StarWarsCharacters />);

    const prevButton = getByText(/previous/i);
    const nextButton = getByText(/next/i);
})