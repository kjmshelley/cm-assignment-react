import { render, screen, } from '@testing-library/react';
import Rating from '../index';

test('Rating renders successfully', () => {
  render(<Rating stars={1} />);
  const element = screen.getByTitle("rating");
  expect(element).toBeInTheDocument();
});