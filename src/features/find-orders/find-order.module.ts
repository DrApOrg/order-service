import { Module } from "@nestjs/common";
import { OrderDatasourceModule } from "src/datasource/orders.repository.module";
import { FindOrderTcpController } from "./find-order.tcp.controller";
import { FindOrderUseCase } from "./find-order.use-case";


@Module({
    imports: [OrderDatasourceModule],
    controllers: [FindOrderTcpController],
    providers: [FindOrderUseCase]
})

export class FindOrderModule {}