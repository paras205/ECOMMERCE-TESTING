import Register from "src/Pages/Register";
import renderer from "react-test-renderer";
import { fireEvent } from "@testing-library/react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("register", () => {
  it("register page renders correctly", () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("register user correctly", async () => {
    render(<Register />);
    const value = "user@test.com";
    const input = screen.getByPlaceholderText(/email/i);
    await userEvent.type(input, value);
    await act(async () => {
      fireEvent.click(screen.getByText(/Register User/i));
    });
  });
});
