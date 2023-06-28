import { fireEvent, render, screen, waitFor } from "@/tests/test-utils";
import { SignUpForm } from ".";
import { vi } from "vitest";
import { CreateUserDto } from "@/services/user";

async function promise(data: CreateUserDto) {
  return new Promise((res) => {
    res(data);
  });
}

describe("SignUpForm", () => {
  const onSubmit = vi.fn(async (data: CreateUserDto) => {
    await promise(data);
  });

  it("should be able to render SignUpForm", () => {
    render(<SignUpForm onSubmit={onSubmit} />);
    const form = screen.getByRole("form");

    expect(form).toBeInTheDocument();
  });
  it("should be able to fill in the form fields and submit form", async () => {
    render(<SignUpForm onSubmit={onSubmit} />);
    const [inputName, inputEmail, inputPassword] = screen.getAllByRole(
      "textbox"
    ) as HTMLInputElement[];
    const submitButton = screen.getByRole("button") as HTMLButtonElement;

    fireEvent.input(inputName, { target: { value: "John Doe" } });
    fireEvent.input(inputEmail, { target: { value: "johndoe@email.com" } });
    fireEvent.input(inputPassword, { target: { value: "123123" } });

    await waitFor(() => {
      fireEvent.submit(submitButton);
    });

    expect(onSubmit).toBeCalled();
  });

  it("should not be possible to submit the form with invalid fields", async () => {
    render(<SignUpForm onSubmit={onSubmit} />);
    const [inputName, inputEmail, inputPassword] = screen.getAllByRole(
      "textbox"
    ) as HTMLInputElement[];
    const submitButton = screen.getByRole("button") as HTMLButtonElement;

    fireEvent.input(inputName, { target: { value: "Jo" } });
    fireEvent.input(inputEmail, { target: { value: "johndoe@email" } });
    fireEvent.input(inputPassword, { target: { value: "123" } });

    expect(submitButton.disabled).toBe(true);

    await waitFor(() => {
      fireEvent.submit(submitButton);
      expect(screen.getByText('O nome deve ter pelo menos 3 caracteres')).toBeInTheDocument();
      expect(screen.getByText('Email inválido')).toBeInTheDocument();
      expect(screen.getByText('A senha deve ter pelo menos 6 caracteres')).toBeInTheDocument();
    });

  });
});
