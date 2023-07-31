import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BankingTransactionResolverBase } from "./base/bankingTransaction.resolver.base";
import { BankingTransaction } from "./base/BankingTransaction";
import { BankingTransactionService } from "./bankingTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BankingTransaction)
export class BankingTransactionResolver extends BankingTransactionResolverBase {
  constructor(
    protected readonly service: BankingTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
