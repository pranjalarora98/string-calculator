import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../src/components/StringCalculator';
import Add from '../src/utils';

jest.mock('../src/utils');

describe('StringCalculator Component', () => {

    it('should call Add and show result when Calculate is clicked', () => {
        Add.mockImplementation(() => 6);

        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers');
        const button = screen.getByText('Calculate');

        fireEvent.change(input, { target: { value: '1,2,3' } });
        fireEvent.click(button);

        expect(screen.getByText('Result: 6')).toBeInTheDocument();
    });

    it('should show error when Add throws an error', () => {
        Add.mockImplementation(() => {
            // throw new Error('Negatives not allowed: -2');
        });

        render(<StringCalculator />);
        const input = screen.getByPlaceholderText('Enter numbers');
        const button = screen.getByText('Calculate');

        fireEvent.change(input, { target: { value: '1,-2' } });
        fireEvent.click(button);

    });
});
