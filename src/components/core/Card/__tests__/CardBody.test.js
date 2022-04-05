import { render, screen, } from '@testing-library/react';
import CardBody from '../CardBody';

test('CardBody renders successfully', () => {
  render(<CardBody>My Card</CardBody>);
  const cardElement = screen.getByText("My Card");
  expect(cardElement).toBeInTheDocument();
});