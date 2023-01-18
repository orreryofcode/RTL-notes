# React Testing

Uses React Testing Library and Jest together

```javascript
test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});
```

1. test(name, function, timeout) render(Component to be tested) - This is
   imported from the React testing library.

2. screen.getByText(Text to find) - 'screen' is imported from the React testing
   library

3. expect(the stuff you got from the screen).toBeInTheDocument()

## Test Driven Development aka "Red-Green" Testing

Software development process where you write tests before writing actual
software code. Once the tests are written, the code for the software is written
to be sure that it passes the tests.

This is a 3 step process

1. Create tests that verify the functionality of a specific feature
2. Write software code that will run the tests successfully when re-executed.
3. Refactor the code for optimization while ensuring that the tests are still
   passed.
