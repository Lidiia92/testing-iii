// Test away

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('<Dashboard /> tests', () => {
    it('shows the controls and display', () => {
        const { getByTestId } = render(<Dashboard />);

        const display = getByTestId('display');
        const controls = getByTestId('controls');

        expect(display).toBeInTheDocument();
        expect(controls).toBeInTheDocument();
    });

});