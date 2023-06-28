import { httpClient } from "./http-client";

export type WithdrawalMoneyDto = {
  value: number;
};

export type WithdrawalMoneyNote = {
  note: string;
  quantity: number;
};

export type WithdrawalMoneyResponseDto = {
  currentValue: number;
  notes: WithdrawalMoneyNote[];
  transactionId: string;
};

export type TransactionResponsePaginated = {
  content: TransactionResponseDto[]
  elementsInPage: number;
  firstPage: boolean;
  lastPage: boolean;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type TransactionResponseDto = {
  id: string;
  title: string;
  type: string;
  value: number;
  createdAt: Date;
};

class TransactionService {
  async withdrawalMoney(data: WithdrawalMoneyDto) {
    return httpClient.post<WithdrawalMoneyResponseDto>(
      "/v1/transactions/withdrawal-money",
      data
    );
  }

  async findAllTransactions(page: number, size: number) {
    return httpClient.get<TransactionResponsePaginated>("/v1/transactions", { page, size });
  }
}

const transactionService = new TransactionService();

export { transactionService };
