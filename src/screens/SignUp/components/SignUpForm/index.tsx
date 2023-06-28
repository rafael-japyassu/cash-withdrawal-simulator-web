import { Link } from "react-router-dom";
import { Button, Input } from "@/components/shared";
import { useForm } from "react-hook-form";
import { CreateUserDto } from "@/services/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../validations/signupValidation";

interface SignUpFormProps {
  onSubmit(data: CreateUserDto): Promise<void>;
}

const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const { handleSubmit, register, formState: { errors, isValid } } = useForm<CreateUserDto>({
    mode: 'all',
    resolver: zodResolver(signUpSchema)
  });

  return (
    <form
      className="flex flex-col gap-6 w-full max-w-[400px] mt-7"
      onSubmit={handleSubmit(onSubmit)}
      role="form"
    >
      <Input
        label="Nome"
        type="text"
        placeholder="Digite seu nome..."
        register={register("name")}
        error={errors.name?.message}
        role="textbox"
      />
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
      <Button type="submit" disabled={!isValid}>
        <span className="text-center font-semibold text-white">Cadastrar</span>
      </Button>
      <p className="text-white">
        Já tem conta?{" "}
        <Link to="/" className="text-violet-500 hover:text-violet-600">
          Faça login
        </Link>
      </p>
    </form>
  );
};

export { SignUpForm };
