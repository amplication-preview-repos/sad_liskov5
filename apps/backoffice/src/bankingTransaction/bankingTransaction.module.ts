import { Module } from "@nestjs/common";
import { BankingTransactionModuleBase } from "./base/bankingTransaction.module.base";
import { BankingTransactionService } from "./bankingTransaction.service";
import { BankingTransactionController } from "./bankingTransaction.controller";
import { BankingTransactionResolver } from "./bankingTransaction.resolver";

@Module({
  imports: [BankingTransactionModuleBase],
  controllers: [BankingTransactionController],
  providers: [BankingTransactionService, BankingTransactionResolver],
  exports: [BankingTransactionService],
})
export class BankingTransactionModule {}
