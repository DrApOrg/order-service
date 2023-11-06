import { Module } from '@nestjs/common';
import { OrderDatasourceModule } from 'src/datasource/orders.repository.module';
import { SaveOrderHttpController } from './save-order.http.controller';
import { SaveOrderTcpController } from './save-order.tcp.controller';
import { SaveOrderUseCase } from './save-order.use-case';

@Module({
  imports: [OrderDatasourceModule],
  controllers: [SaveOrderTcpController, SaveOrderHttpController],
  providers: [SaveOrderUseCase],
})
export class SaveOrderModule {}
