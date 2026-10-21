import { render, screen } from '@testing-library/react';
import App from './App';

test('renders countdown heading', () => {
  render(<App />);
  const heading = screen.getByText(/countdown to halley's comet/i);
  expect(heading).toBeInTheDocument();
});
