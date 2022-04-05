import { render, screen, } from '@testing-library/react';
import CardFooter from '../CardFooter';

test('CardFooter renders successfully', () => {
  render(<CardFooter>My Card</CardFooter>);
  const cardElement = screen.getByText("My Card");
  expect(cardElement).toBeInTheDocument();
});