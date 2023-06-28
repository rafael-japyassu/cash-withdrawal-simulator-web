import { render, screen } from "@/tests/test-utils";
import { WithdrawalMoneyScreen } from ".";

describe("WithdrawalMoneyScreen", () => {
  it("should be able to render WithdrawalMoneyScreen", () => {
    render(<WithdrawalMoneyScreen />);
    const component = screen.getByTestId("withdrawal-money-screen");
    const form = screen.getByRole("form")

    expect(component).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});
