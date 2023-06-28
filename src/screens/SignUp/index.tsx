import { TextLogo } from "@/components/shared";
import { SignUpForm } from "./components";
import { useCallback } from "react";
import { CreateUserDto, userService } from "@/services/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const SignUpScreen = () => {
  const navigate = useNavigate();
  const onSubmit = useCallback(
    async (data: CreateUserDto) => {
      try {
        await userService.create(data);

        toast.success("Cadastro realizado com sucesso");
        navigate("/");
      } catch (err) {
        if (err instanceof AxiosError) {
          err.response?.data.errors.forEach((error: string) => {
            toast.error(error);
          });
          return;
        }

        toast.error("Falha ao realizar cadastro");
      }
    },
    [navigate]
  );

  return (
    <div className="flex flex-col gap-8 items-center justify-center  min-h-screen h-full bg-zinc-900 p-6" data-testid="sign-up-screen">
      <TextLogo />
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-white font-semibold text-4xl">
          <span className="text-violet-500">Cash</span> Withdrawal Simulator
        </h2>
        <p className="text-gray-300">
          Preencha os dados abaixo para se cadastrar na plataforma.
        </p>
      </div>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};
