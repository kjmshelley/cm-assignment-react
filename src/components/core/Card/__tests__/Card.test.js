import { render, screen, } from '@testing-library/react';
import Card from '../Card';

test('Card renders successfully', () => {
  render(<Card>My Card</Card>);
  const cardElement = screen.getByText("My Card");
  expect(cardElement).toBeInTheDocument();
});