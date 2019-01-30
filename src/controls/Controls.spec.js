// Test away!

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

describe('<Controls /> tests', () => {
    it('provide buttons to toggle the closed and locked states.', () => {
        const { getByTestId } = render(<Controls />);

        const closed = getByTestId('closed');
        const locked = getByTestId('locked');

        expect(closed).toBeInTheDocument();
        expect(locked).toBeInTheDocument();
    });

});