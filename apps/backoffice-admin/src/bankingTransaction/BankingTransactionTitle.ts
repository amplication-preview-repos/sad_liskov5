import { BankingTransaction as TBankingTransaction } from "../api/bankingTransaction/BankingTransaction";

export const BANKINGTRANSACTION_TITLE_FIELD = "id";

export const BankingTransactionTitle = (
  record: TBankingTransaction
): string => {
  return record.id || String(record.id);
};
