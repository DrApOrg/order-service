import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderDto } from 'src/dto/order.dto';
import { SaveOrderUseCase } from './save-order.use-case';

@Controller()
export class SaveOrderTcpController {
  constructor(private readonly saveOrderUserCase: SaveOrderUseCase) {}

  @UsePipes(ValidationPipe)
  @MessagePattern({ subject: 'order', cmd: 'save' })
  async execute({ order }: { order: OrderDto }): Promise<void> {
    return await this.saveOrderUserCase.execute(order);
  }
}
