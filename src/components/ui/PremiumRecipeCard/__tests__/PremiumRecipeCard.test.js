import { render, screen, } from '@testing-library/react';
import PremiumRecipeCard from '../index';

test('PremiumRecipeCard renders successfully', () => {
  render(<PremiumRecipeCard recipe={{title: "My Recipe Title"}} />);
  const element = screen.getByText("My Recipe Title");
  expect(element).toBeInTheDocument();
});