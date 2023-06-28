import { TransactionResponseDto } from "@/services/transaction";
import { formatCurrency } from "@/utils/currency";

interface ExtractTableProps {
  transactions: TransactionResponseDto[];
}

export const ExtractTable = ({ transactions }: ExtractTableProps) => {
  return (
    <table className="text-center w-full border-separate border-spacing-y-4 transition-all">
      <thead className="text-zinc-500">
        <tr>
          <th>Título</th>
          <th>Tipo</th>
          <th>Valor</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody className="text-white">
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className="p-4 bg-zinc-950 first:rounded-s-md last:rounded-e-md">
              {transaction.title}
            </td>
            <td className="p-4 bg-zinc-950 first:rounded-s-md last:rounded-e-md">
              {transaction.type === "expense" ? (
                <span className="p-2 bg-red-500 text-white rounded text-sm bg-opacity-50">
                  Saída
                </span>
              ) : (
                <span className="p-2 bg-green-500 text-white rounded text-sm bg-opacity-50">
                  Entrada
                </span>
              )}
            </td>
            <td className="p-4 bg-zinc-950 first:rounded-s-md last:rounded-e-md">
              {formatCurrency(transaction.value)}
            </td>
            <td className="p-4 bg-zinc-950 first:rounded-s-md last:rounded-e-md">
              {new Date(transaction.createdAt).toLocaleDateString("pt-br", { hour: 'numeric', minute: 'numeric' })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
