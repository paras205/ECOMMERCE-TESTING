import renderer from "react-test-renderer";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "src/Pages/Login";

interface Window {
  location?: any;
}

describe("login component", () => {
  it("login page renders correctly", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("validation", () => {
    describe("emailValidation", () => {
      it("correctly validates the email", async () => {
        render(<Login />);
        const emailInput = screen.getByLabelText("Email");
        fireEvent.blur(emailInput);
        await screen.findByText("Required");
        userEvent.type(emailInput, "test");
        fireEvent.blur(emailInput);
        await screen.findByText("Invalid email address");
        userEvent.clear(emailInput);
        userEvent.type(emailInput, "john@gmail.com");
        await waitForElementToBeRemoved(() =>
          screen.getByText("Invalid email address")
        );
      });
    });
  });

  describe("pasword field", () => {
    it("correctly validates the password", async () => {
      render(<Login />);
      const passwordInput = screen.getByLabelText("Password");
      fireEvent.blur(passwordInput);
      await screen.findByText("Required");
      userEvent.type(passwordInput, "fakePassword");
      await waitForElementToBeRemoved(() => screen.getByText("Required"));
    });
  });

  describe("form submission", () => {
    beforeEach(() => {
      (fetch as any).resetMocks();
    });
    describe("when valid", () => {
      it("redirects user to dashboard", async () => {
        const replace = jest.fn();
        (fetch as any).mockResponseOnce({ valid: true });
        delete (window as Window).location;
        (window as Window).location = {
          replace,
        };
        render(<Login />);
        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Password");
        userEvent.type(emailInput, "john@gmail.com");
        userEvent.type(passwordInput, "fakePassword");
        const submitButton = screen.getByRole("button", { name: "Sign In" });
        await waitFor(() => expect(submitButton).not.toBeDisabled());
        userEvent.click(submitButton);
        await waitFor(() =>
          expect(window.location.replace).toHaveBeenCalledWith("/dashboard")
        );
      });
    });
    describe("when invalid", () => {
      it("shows error", async () => {
        (fetch as any).mockRejectOnce({ invalid: true });
        render(<Login />);
        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Password");
        userEvent.type(emailInput, "john@gmail.com");
        userEvent.type(passwordInput, "fakePassword");
        const submitButton = screen.getByRole("button", { name: "Sign In" });
        await waitFor(() => expect(submitButton).not.toBeDisabled());
        userEvent.click(submitButton);
        await screen.findByText("Invalid username or password");
      });
    });
  });
});
