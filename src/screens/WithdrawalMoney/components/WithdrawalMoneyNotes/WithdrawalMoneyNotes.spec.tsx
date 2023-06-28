import { render, screen } from "@/tests/test-utils";
import { WithdrawalMoneyNotes } from ".";

describe("WithdrawalMoneyNotes", () => {
  it("should be able to render WithdrawalMoneyNotes", () => {
    render(
      <WithdrawalMoneyNotes
        value={350}
        notes={[{ note: "100", quantity: 3 }, { note: "50", quantity: 1 }]}
      />
    );
    const component = screen.getByRole("contentinfo");

    expect(component).toBeInTheDocument();
    expect(screen.getByText("R$ 350,00")).toBeInTheDocument();
    expect(screen.getByText("3 notas de 100 Reais")).toBeInTheDocument();
    expect(screen.getByText("1 nota de 50 Reais")).toBeInTheDocument();
  });
});
