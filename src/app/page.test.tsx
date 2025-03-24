import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // 👈 반드시 추가!
import Home from './page';

describe('Home Page', () => {
  test('renders the text "test"', () => {
    render(<Home />);

    const textElement = screen.getByText(/test/i);
    expect(textElement).toBeInTheDocument();
  });
});