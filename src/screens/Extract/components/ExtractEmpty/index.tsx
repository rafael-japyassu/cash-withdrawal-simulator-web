import { Link } from "react-router-dom";

export const ExtractEmpty = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-white gap-4">
      <span className="text-xl">
        Nenhuma transação encontrada. Faça um Saque clicando <Link to="/withdrawal-money" className="text-violet-500 underline font-bold">aqui</Link>.
      </span>
    </div>
  );
};
