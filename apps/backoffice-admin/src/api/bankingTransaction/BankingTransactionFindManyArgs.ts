import { BankingTransactionWhereInput } from "./BankingTransactionWhereInput";
import { BankingTransactionOrderByInput } from "./BankingTransactionOrderByInput";

export type BankingTransactionFindManyArgs = {
  where?: BankingTransactionWhereInput;
  orderBy?: Array<BankingTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
