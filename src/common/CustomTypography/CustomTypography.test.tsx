import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CustomTypography from './CustomTypography';

describe('CustomTypography component', () => {
  test('renders the typography with text', () => {
    render(<CustomTypography variant="h6" text="Test text" />);
    const typographyElement = screen.getByText('Test text');
    expect(typographyElement).toBeInTheDocument();
  });
});
