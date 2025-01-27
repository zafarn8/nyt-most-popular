import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders loading state', () => {
  render(<Home />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
