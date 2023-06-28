import { CaretLeft, CaretRight } from "phosphor-react";

interface ExtractPaginationProps {
  size: number;
  page: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  changeSize(size: number): void;
  changePage(page: number): void;
}

export const ExtractPagination = ({
  changeSize,
  isFirstPage,
  isLastPage,
  size,
  changePage,
  page,
}: ExtractPaginationProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-white">
        <span className="">Exibindo</span>
        <select
          className="bg-zinc-950 px-4 py-2 rounded-md outline-violet-700"
          onChange={(e) => changeSize(Number(e.target.value))}
          value={size}
        >
          <option value={10} selected>
            10 itens
          </option>
          <option value={15}>15 itens</option>
          <option value={20}>20 itens</option>
          <option value={50}>50 itens</option>
        </select>
      </div>
      <div className="flex items-center justify-end gap-4">
        <button
          disabled={isFirstPage}
          onClick={() => changePage(page - 1)}
          className="flex items-center justify-center w-[40px] h-[40px] text-white bg-violet-500 rounded hover:bg-violet-600 active:bg-violet-700 transition-colors mt-2 outline-violet-700 disabled:bg-violet-400 disabled:cursor-not-allowed"
        >
          <CaretLeft weight="bold" />
        </button>
        <button
          disabled={isLastPage}
          onClick={() => changePage(page + 1)}
          className="flex items-center justify-center w-[40px] h-[40px] text-white bg-violet-500 rounded hover:bg-violet-600 active:bg-violet-700 transition-colors mt-2 outline-violet-700 disabled:bg-violet-400 disabled:cursor-not-allowed"
        >
          <CaretRight weight="bold" />
        </button>
      </div>
    </div>
  );
};
