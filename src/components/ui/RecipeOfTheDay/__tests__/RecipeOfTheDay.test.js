import { render, screen, } from '@testing-library/react';
import RecipeOfTheDay from '../index';

test('RecipeOfTheDay renders successfully', () => {
  render(<RecipeOfTheDay recipe={{title: "My Recipe Title"}} />);
  const element = screen.getByText("My Recipe Title");
  expect(element).toBeInTheDocument();
});