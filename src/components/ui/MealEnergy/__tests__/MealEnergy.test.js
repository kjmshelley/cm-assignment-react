import { render, screen, } from '@testing-library/react';
import MealEnergy from '../index';

test('MealEnergy renders successfully', () => {
  render(<MealEnergy carbs={80} />);
  const cardElement = screen.getByText("80");
  expect(cardElement).toBeInTheDocument();
});