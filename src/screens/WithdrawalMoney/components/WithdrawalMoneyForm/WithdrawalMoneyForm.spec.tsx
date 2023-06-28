import { fireEvent, render, screen, waitFor } from "@/tests/test-utils";
import { WithdrawalMoneyForm } from ".";
import { vi } from "vitest";
import { WithdrawalMoneyDto } from "@/services/transaction";

async function promise(data: WithdrawalMoneyDto) {
  return new Promise((res) => {
    res(data);
  });
}

describe("WithdrawalMoneyForm", () => {
  const onSubmit = vi.fn(async (data: WithdrawalMoneyDto) => {
    await promise(data);
  });

  it("should be able to render WithdrawalMoneyForm", () => {
    render(<WithdrawalMoneyForm onSubmit={onSubmit} isLoading={false} />);
    const form = screen.getByRole("form");

    expect(form).toBeInTheDocument();
  });

  it("should be able to submit form", async () => {
    render(<WithdrawalMoneyForm onSubmit={onSubmit} isLoading={false} />);
    const form = screen.getByRole("form");
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();

    fireEvent.input(input, { target: { value: 100 } });

    await waitFor(() => {
      fireEvent.submit(form);

      expect(onSubmit).toBeCalled();
    });
  });

  it("should not be able to submit form with invalid fields", async () => {
    render(<WithdrawalMoneyForm onSubmit={onSubmit} isLoading={false} />);
    const form = screen.getByRole("form");
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();

    fireEvent.input(input, { target: { value: 15 } });

    await waitFor(() => {
      fireEvent.submit(form);
      expect(
        screen.getByText("O valor deve ser múltiplo de 10")
      ).toBeInTheDocument();
    });
  });
});
