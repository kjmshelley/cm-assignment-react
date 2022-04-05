import { render, screen, } from '@testing-library/react';
import Label from '../index';

test('Label renders successfully', () => {
  render(<Label text="My Label" />);
  const element = screen.getByText("My Label");
  expect(element).toBeInTheDocument();
});