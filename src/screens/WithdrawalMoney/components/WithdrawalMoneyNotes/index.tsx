import { WithdrawalMoneyNote } from "@/services/transaction";
import { formatCurrency } from "@/utils/currency";

interface WithdrawalMoneyNotesProps {
  value: number;
  notes: WithdrawalMoneyNote[];
}

export const WithdrawalMoneyNotes = ({ notes, value }: WithdrawalMoneyNotesProps) => {
  return (
    <div className="flex items-center flex-col gap-6" role="contentinfo">
      <h2 className="text-2xl text-white">
        Valor Sacado:{" "}
        <span className="text-green-500 font-medium" role="alert">
          {formatCurrency(value)}
        </span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 text-white">
        {notes.map(({ note, quantity }) => (
          <div
            key={note}
            className="flex flex-col gap-2 items-center justify-center border border-violet-500 bg-zinc-950 rounded p-4"
          >
            <span className="text-lg" role="listitem">
              {quantity} {quantity > 1 ? "notas" : "nota"} de {note} Reais
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
