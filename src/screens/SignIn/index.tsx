import { TextLogo } from "@/components/shared";
import { SignInForm } from "./components";
import { AuthenticateDto } from "@/services/auth";
import { useCallback } from "react";
import { useAuth } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const SignInScreen = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const onSubmit = useCallback(async (data: AuthenticateDto) => {
    try {
      await signIn(data);
      navigate('/withdrawal-money')

    } catch (err) {
      if (err instanceof AxiosError) {
        err.response?.data.errors.forEach((error: string) => {
          toast.error(error);
        });
        return;
      }

      toast.error("Falha ao realizar login");
    }
  }, [signIn, navigate]);

  return (
    <div className="flex flex-col gap-8 items-center justify-center  min-h-screen h-full bg-zinc-900 p-6" data-testid="sign-in-screen">
      <TextLogo />
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-white font-semibold text-4xl">
          <span className="text-violet-500">Cash</span> Withdrawal Simulator
        </h2>
        <p className="text-gray-300">
          Preencha os dados abaixo para acessar a plataforma.
        </p>
      </div>
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};
