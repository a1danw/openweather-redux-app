import { render } from "@testing-library/react";
import { ButtonComponent } from "./Button";

// describe - describes the event we are expecting
describe("Button Component", () => {
  it("rendered button", () => {
    const { getByTitle } = render(<ButtonComponent />);
    const button = getByTitle("searchBtn");
    expect(button).toBeTruthy();
  });
});
