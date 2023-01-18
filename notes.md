# React Testing

Uses React Testing Library and Jest together (also used jest-dom for React
specific matchers)

Docs: https://testing-library.com/docs/

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

# Test Driven Development aka "Red-Green" Testing

Software development process where you write tests before writing actual
software code. Once the tests are written, the code for the software is written
to be sure that it passes the tests.

This is a 3 step process

1. Create tests that verify the functionality of a specific feature
2. Write software code that will run the tests successfully when re-executed.
3. Refactor the code for optimization while ensuring that the tests are still
   passed.

# Code Coverage

Generates a report that highlights what percentage of statements, branches,
functions and lines are being tested.

> Example of 'coverage' script that generates a coverage report from all files
> within the "components" folder with ts or tsx extensions.
>
> ```javascript
> "coverage": "react-scripts test --env=jsdom --watchAll=false --coverage --collectCoverageFrom='src/components/**/*.{ts,tsx}'"
> ```
>
> Note that CRA runs tests in watch mode by default.

**Note**: 100% code coverage does guarantee that all of your code runs
correctly. Aiming for ~80% should be the goal.

# What to test?

1. Test component renders
2. Test component renders with props
3. Test component renders in different states (ie: Navbar renders 'login' button
   when user is signed out and 'logout' button when user is signed in)
4. Test component reacts to events (forms/buttons/inputs react to user input)

**What NOT to test**

1. Implementation details
2. Third party code
3. Code that is not important from a user point of view

# RTL Queries

Every test involves the following basic steps:

1. Render the component (uses render() method)
2. Find an element by the component
3. Assert against the element found, which will cause the test to pass or fail
   (assertion uses the expect() method and we chain a matcher from Jest or
   Jest-DOM)

RTL Queries allow us to find specific elements on the page.

To find a **single** element on the page:

- getBy..
  - Returns a matching node for a query and throws an error if no elements or if
    multiple elements match
- queryBy..
- findBy..

To find **multiple** elements on the page:

- getAllBy..
- queryAllBy..
- findAllBy..

Each of these requires a suffix that be of the following:

- **Role** (list of all elements by role:
  https://www.w3.org/TR/html-aria/#docconformance) **Should be top method unless
  it doesn't cover some unique situation**
- **LabelText**: will look for label that matches given text and find the
  element associated with that label
- **PlaceHolderText**: will look for element that has a placeholder attribute
  that matches the given text
- **Text**: searches for all elements that have a text node with textContent
  that matches the given text ex: div, span, paragraph tags
- **DisplayValue**: returns the input, textarea or select area with the value
  attribute that matches the given text
- **AltText**: finds the element with with the alt attribute that matches the
  given text
- **Title**: finds the element with with the title attribute that matches the
  given text
- **TestId**: finds the element with with the data-testid attribute that matches
  the given text

**Priority Order** **Test should resemble how users interact with code**

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId
