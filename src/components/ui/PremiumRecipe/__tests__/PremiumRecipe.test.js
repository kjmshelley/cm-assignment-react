import { render, screen, } from '@testing-library/react';
import PremiumRecipe from '../index';

test('PremiumRecipe renders successfully', () => {
  render(<PremiumRecipe text={80} />);
  const cardElement = screen.getByText("80");
  expect(cardElement).toBeInTheDocument();
});