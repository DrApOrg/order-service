import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Order, OrderSchema } from "./entities/order.entity";
import { OrdersRepository } from "./orders.datasource";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])
    ],
    providers: [OrdersRepository],
    exports: [OrdersRepository]
})



export class OrderDatasourceModule {}