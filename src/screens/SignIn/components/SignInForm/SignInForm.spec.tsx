import { fireEvent, render, screen, waitFor } from "@/tests/test-utils";
import { SignInForm } from ".";
import { vi } from "vitest";
import { AuthenticateDto } from "@/services/auth";

async function promise(data: AuthenticateDto) {
  return new Promise((res) => {
    res(data);
  });
}

describe("SignInForm", () => {
  const onSubmit = vi.fn(async (data: AuthenticateDto) => {
    await promise(data);
  });

  it("should be able to render SignInForm", () => {
    render(<SignInForm onSubmit={onSubmit} />);
    const form = screen.getByRole("form");

    expect(form).toBeInTheDocument();
  });
  it("should be able to fill in the form fields and submit form", async () => {
    render(<SignInForm onSubmit={onSubmit} />);
    const [inputEmail, inputPassword] = screen.getAllByRole(
      "textbox"
    ) as HTMLInputElement[];
    const submitButton = screen.getByRole("button") as HTMLButtonElement;

    fireEvent.input(inputEmail, { target: { value: "johndoe@email.com" } });
    fireEvent.input(inputPassword, { target: { value: "123123" } });

    await waitFor(() => {
      fireEvent.submit(submitButton);
    });

    expect(onSubmit).toBeCalled();
  });

  it("should not be possible to submit the form with invalid fields", async () => {
    render(<SignInForm onSubmit={onSubmit} />);
    const [inputEmail, inputPassword] = screen.getAllByRole(
      "textbox"
    ) as HTMLInputElement[];
    const submitButton = screen.getByRole("button") as HTMLButtonElement;

    fireEvent.input(inputEmail, { target: { value: "johndoe@email" } });
    fireEvent.input(inputPassword, { target: { value: "123" } });
    expect(submitButton.disabled).toBe(true);

    await waitFor(() => {
      fireEvent.submit(submitButton);
      expect(screen.getByText('Email inválido')).toBeInTheDocument();
      expect(screen.getByText('A senha deve ter pelo menos 6 caracteres')).toBeInTheDocument();
    });

  });
});
