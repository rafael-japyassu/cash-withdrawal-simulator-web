import { transactionService } from "@/services/transaction";
import { useQuery } from "react-query";

export const useExtract = (page = 1, size = 20) => {
  const { data, error, refetch, isLoading } = useQuery(['extracts', size, page], () =>
    transactionService.findAllTransactions(page, size),
    { refetchOnWindowFocus: false }
  );

  return {
    data: data?.data.data,
    error: data?.data.errors.length && data?.data.errors || error,
    isLoading,
    refetch
  }
}