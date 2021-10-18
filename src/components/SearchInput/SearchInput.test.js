import { act, render, fireEvent } from "@testing-library/react";
import { SearchInputComponent } from "./SearchInput";

// test to see if search input renders correctly
// it - what we are testing for
it("inputRenderCheck", () => {
  const { queryByTitle } = render(<SearchInputComponent />);
  const input = queryByTitle("searchInput");
  // toBeTruthy checks to see if whatever we pass into it exists - this will check to see if the button renders
  expect(input).toBeTruthy();
});

it("onInputChange", async () => {
  // whenever testing something that will change an individual state from the app and modify the state
  // the test function needs to be wrapped within an act function - without this it wont re-render the component thats trying to render
  // if theres a change in the state
  await act(async () => {
    const { queryByTitle } = render(<SearchInputComponent />);
    const input = queryByTitle("searchInput");
    // whatever input is put inside of here is going to change something in that input
    // every element from an input has a target - inside of the target has a value
    // inside of the value has whatever is written in the input
    const inputWord = "Newcastle Upon Tyne";
    await fireEvent.change(input, { target: { value: inputWord } });
    // check if input value changes to the specified value Newcastle Upon Tyne
    expect(input.value).toBe(inputWord);
  });
});
