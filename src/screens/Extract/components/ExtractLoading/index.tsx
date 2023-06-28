import { Spinner } from "phosphor-react";

export const ExtractLoading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center text-violet-500 gap-2">
      <Spinner size={70} className="animate-spin" />
      <span className="text-3xl">Carregando...</span>
    </div>
  );
};
