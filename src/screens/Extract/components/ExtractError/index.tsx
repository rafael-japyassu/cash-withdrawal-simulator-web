import notFoundData from "@/assets/not-found-data.svg";

export const ExtractError = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-white gap-4">
      <img src={notFoundData} alt="Not found data" className="w-[300px]" />
      <span className="text-xl">
        Falha ao carregar dados, tente novamente mais tarde.
      </span>
    </div>
  );
};
