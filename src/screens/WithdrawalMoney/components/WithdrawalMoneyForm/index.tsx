import { Button, Input } from "@/components/shared";
import { WithdrawalMoneyDto } from "@/services/transaction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { withdrawalMoneySchema } from "../../validations/withdrawalMoneyValidation";

interface WithdrawalMoneyFormProps {
  onSubmit(data: WithdrawalMoneyDto): Promise<void>;
  isLoading: boolean;
}

export const WithdrawalMoneyForm = ({ onSubmit, isLoading }: WithdrawalMoneyFormProps) => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<WithdrawalMoneyDto>({
    mode: 'all',
    resolver: zodResolver(withdrawalMoneySchema)
  });

  async function handleSubmitForm(data: WithdrawalMoneyDto) {
    await onSubmit(data);
    reset();
  }

  return (
    <form
      className="flex flex-col gap-2 max-w-[400px] w-full p-4"
      onSubmit={handleSubmit(handleSubmitForm)}
      role="form"
    >
      <h2 className="text-white">Digite um valor para sacar</h2>
      <Input
        placeholder="Digite um valor"
        type="number"
        step={10}
        register={register("value")}
        error={errors.value?.message}
        role="textbox"
      />
      <Button type="submit" loading={isLoading} disabled={!isValid}>
        <span className="text-center font-semibold text-white">Sacar</span>
      </Button>
    </form>
  );
};
