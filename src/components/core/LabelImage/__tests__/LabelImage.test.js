import { render, screen, } from '@testing-library/react';
import LabelImage from '../index';

test('LabelImage renders successfully', () => {
  render(<LabelImage variant="TROPHY" text={80} />);
  const element = screen.getByText("80");
  expect(element).toBeInTheDocument();
});