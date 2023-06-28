import { render, screen } from "@/tests/test-utils";
import { SignUpScreen } from ".";

describe("SignUpScreen", () => {
  it("should be able to render SignUpScreen", () => {
    render(<SignUpScreen />);
    const component = screen.getByTestId("sign-up-screen");
    const title = screen.getByRole("heading")
    const form = screen.getByRole("form")
    const link = screen.getByRole("link")

    expect(component).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
