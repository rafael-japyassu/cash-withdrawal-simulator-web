import { useCallback, useState } from "react";
import { useExtract } from "./hooks/extract";
import {
  ExtractTable,
  ExtractError,
  ExtractLoading,
  ExtractPagination,
  ExtractEmpty,
} from "./components";

export const ExtractScreen = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const { data, isLoading, error } = useExtract(page, size);

  const changeSize = useCallback((value: number) => {
    setSize(value);
    setPage(1);
  }, []);

  return (
    <div className="flex flex-col w-full gap-8" data-testid="extract-screen">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-white">Meu Extrato</h2>
      </div>
      {isLoading ? <ExtractLoading /> : null}
      {!data || error ? <ExtractError /> : null}

      {data && Object.keys(data).length ? (
        !data.content.length ? (
          <ExtractEmpty />
        ) : (
          <div className="flex flex-col gap-4">
            <ExtractTable transactions={data.content} />
            <ExtractPagination
              isFirstPage={data.firstPage}
              isLastPage={data.lastPage}
              size={data.size}
              page={data.page}
              changePage={(page) => setPage(page)}
              changeSize={changeSize}
            />
          </div>
        )
      ) : null}
    </div>
  );
};
