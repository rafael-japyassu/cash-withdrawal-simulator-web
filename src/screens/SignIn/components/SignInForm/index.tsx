import { Link } from "react-router-dom";
import { Button, Input } from "@/components/shared";
import { AuthenticateDto } from "@/services/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema } from "../../validations/signInValidation";

interface SignInFormProps {
  onSubmit(data: AuthenticateDto): Promise<void>;
}

const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const { handleSubmit, register, formState: { errors, isValid } } = useForm<AuthenticateDto>({
    mode: 'all',
    resolver: zodResolver(signInSchema)
  });
  
  return (
    <form
      className="flex flex-col gap-6 w-full max-w-[400px] mt-7"
      onSubmit={handleSubmit(onSubmit)}
      role="form"
    >
      <Input
        label="Email"
        type="email"
        placeholder="Digite seu email..."
        register={register("email")}
        error={errors.email?.message}
        role="textbox"
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha..."
        register={register("password")}
        error={errors.password?.message}
        role="textbox"
      />
      <Button type="submit" disabled={!isValid} role="button">
        <span className="text-center font-semibold text-white">Entrar</span>
      </Button>
      <p className="text-white">
        Não tem conta?{" "}
        <Link to="sign-up" className="text-violet-500 hover:text-violet-600">
          Faça seu cadastro
        </Link>
      </p>
    </form>
  );
};

export { SignInForm };
