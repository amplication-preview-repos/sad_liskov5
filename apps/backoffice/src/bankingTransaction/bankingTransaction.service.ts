import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankingTransactionServiceBase } from "./base/bankingTransaction.service.base";

@Injectable()
export class BankingTransactionService extends BankingTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
