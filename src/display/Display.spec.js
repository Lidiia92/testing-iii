// Test away!

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('<Display /> tests', () => {
    it('when locked or closed use the red-led class.', () => {
        const { getByTestId } = render(<Display locked={true} closed={true}/>);

        const closed = getByTestId('closed');
        const locked = getByTestId('locked');

        expect(closed).toHaveClass('led red-led');
        expect(locked).toHaveClass('led red-led');
    });

    it('when unlocked or open use the green-led class', () => {
        const { getByTestId } = render(<Display locked={false} closed={false}/>);

        const closed = getByTestId('closed');
        const locked = getByTestId('locked');

        expect(closed).toHaveClass('led green-led');
        expect(locked).toHaveClass('led green-led');
    });

    it('displays "Locked" if the locked prop is true', () => {
        const { getByTestId } = render(<Display locked={true} />);

        const locked = getByTestId('locked');

        expect(locked).toHaveTextContent(/Locked/i);
    });

    it('displays "Unlocked" if the locked prop is false', () => {
        const { getByTestId } = render(<Display locked={false} />);

        const locked = getByTestId('locked');

        expect(locked).toHaveTextContent(/Unlocked/i);
    });

    it('displays "Closed" if the locked prop is true', () => {
        const { getByTestId } = render(<Display closed={true} />);

        const closed = getByTestId('closed');

        expect(closed).toHaveTextContent(/Closed/i);
    });

    it('displays "Open" if the locked prop is false', () => {
        const { getByTestId } = render(<Display closed={false} />);

        const closed = getByTestId('closed');

        expect(closed).toHaveTextContent(/Open/i);
    });

});

