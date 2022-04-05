import { render, screen, } from '@testing-library/react';
import CardHeader from '../CardHeader';

test('CardHeader renders successfully', () => {
  render(<CardHeader>My Card</CardHeader>);
  const cardElement = screen.getByText("My Card");
  expect(cardElement).toBeInTheDocument();
});