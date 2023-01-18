/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

//The describe method allows us to group tests together
describe("Greet", () => {
  //The skip method allows us to skip a test (this can also be done as we commit changes to git)
  test.skip("renders correctly.", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  //The only method allows us to run specific tests and not run others
  test.skip("renders name correctly", () => {
    render(<Greet name='Raul' />);
    const textElement = screen.getByText("Hello Raul");
    //expect() = assertion; toBeInTheDocument() = matcher
    expect(textElement).toBeInTheDocument();
  });
});

//jestjs.io/docs/using-matchers
//jest-dom provides React specific matchers: https://github.com/testing-library/jest-dom
