import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

//test(name, fn, timeout: default = 5sec)

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
