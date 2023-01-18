/**
 * Greet should r ender the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet renders correctly.", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders name correctly", () => {
  render(<Greet name='Raul' />);
  const textElement = screen.getByText("Hello Raul");
  expect(textElement).toBeInTheDocument();
});
