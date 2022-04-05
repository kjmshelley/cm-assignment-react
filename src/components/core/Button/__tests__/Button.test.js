import { render, screen, } from '@testing-library/react';
import Button from '../index';

test('renders successfully', () => {
  render(<Button text={"my test button"} />);
  const btnElement = screen.getByText("my test button");
  expect(btnElement).toBeInTheDocument();
});