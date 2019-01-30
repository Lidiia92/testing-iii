// Test away!

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
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

    it('the closed toggle button is disabled if the gate is closed', () => {
        const { getByTestId } = render(<Controls locked={true} />);

        const closed = getByTestId('closed');

        fireEvent.click(closed);

        expect(closed).toBeDisabled();
        
    });

    it('the locked toggle button is disabled if the gate is open', () => {
        const { getByTestId } = render(<Controls closed={false} />);

        const locked = getByTestId('locked');

        fireEvent.click(locked);

        expect(locked).toBeDisabled();
        
    });

});