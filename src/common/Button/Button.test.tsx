import { render, screen, fireEvent } from '@testing-library/react';
import Buttons from './Button';
import '@testing-library/jest-dom';

describe('Buttons component', () => {
  test('renders the button with the correct text', () => {
    render(<Buttons variant="contained" size="large" buttonText="Aprende más" onClick={() => {}} />);
    const buttonElement = screen.getByText('Aprende más');
    expect(buttonElement).toBeInTheDocument();
  });

  test('handles onClick event', () => {
    const mockOnClick = jest.fn();
    render(<Buttons variant="contained" size="large" buttonText="Aprende más" onClick={mockOnClick} />);
    const buttonElement = screen.getByText('Aprende más');
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
