import { render, screen } from "@/tests/test-utils";
import { SignInScreen } from ".";

describe("SignInScreen", () => {
  it("should be able to render SignInScreen", () => {
    render(<SignInScreen />);
    const component = screen.getByTestId("sign-in-screen");
    const title = screen.getByRole("heading")
    const form = screen.getByRole("form")
    const link = screen.getByRole("link")

    expect(component).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
