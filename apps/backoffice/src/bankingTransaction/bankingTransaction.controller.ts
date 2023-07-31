import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BankingTransactionService } from "./bankingTransaction.service";
import { BankingTransactionControllerBase } from "./base/bankingTransaction.controller.base";

@swagger.ApiTags("bankingTransactions")
@common.Controller("bankingTransactions")
export class BankingTransactionController extends BankingTransactionControllerBase {
  constructor(
    protected readonly service: BankingTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
