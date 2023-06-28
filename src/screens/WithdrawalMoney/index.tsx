import { useAuth } from "@/hooks";
import {
  WithdrawalMoneyDto,
  WithdrawalMoneyNote,
  transactionService,
} from "@/services/transaction";
import { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { WithdrawalMoneyForm, WithdrawalMoneyNotes } from "./components";

export const WithdrawalMoneyScreen = () => {
  const { updateUserBalance } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState<WithdrawalMoneyNote[]>([]);
  const [value, setValue] = useState<number>(0);

  const onSubmit = useCallback(
    async (data: WithdrawalMoneyDto) => {
      try {
        setIsLoading(true);
        const response = await transactionService.withdrawalMoney({
          value: Number(data.value),
        });
        const { currentValue, notes } = response.data.data;

        setValue(data.value);
        setNotes(notes);
        updateUserBalance(currentValue);
      } catch (err) {
        if (err instanceof AxiosError) {
          err.response?.data.errors.forEach((error: string) => {
            toast.error(error);
          });
          return;
        }

        toast.error("Falha ao realizar saque");
      } finally {
        setIsLoading(false);
      }
    },
    [updateUserBalance]
  );

  return (
    <div className="flex flex-col w-full gap-8" data-testid="withdrawal-money-screen">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-white" role="heading">Sacar notas</h2>
        <p className="text-gray-300">
          Aqui você pode sacar dinheiro de acordo com o seu saldo. Lembrando que
          temos apenas notas de 100, 50, 20 e 10 disponíveis.
        </p>
      </div>
      <div className="flex flex-col items-center h-full justify-center w-full gap-12">
        {notes.length ? (
          <WithdrawalMoneyNotes value={value} notes={notes} />
        ) : null}

        <WithdrawalMoneyForm isLoading={isLoading} onSubmit={onSubmit} />
      </div>
    </div>
  );
};
