import { render, screen, } from '@testing-library/react';
import SVG from '../index';

test('SVG renders successfully', () => {
  render(<SVG variant={"TROPHY"} />);
  const element = screen.getByTitle("svg");
  expect(element).toBeInTheDocument();
});