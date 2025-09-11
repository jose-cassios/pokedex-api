import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pokedex title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Pokédex/i);
  expect(titleElement).toBeInTheDocument();
});
