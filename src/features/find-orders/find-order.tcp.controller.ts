import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Order } from 'src/datasource/entities/order.entity';
import { FindOrderDto } from './find-order.dto';
import { FindOrderUseCase } from './find-order.use-case';

@Controller()
export class FindOrderTcpController {
  constructor(private readonly findOrderUsecase: FindOrderUseCase) {}

  @UsePipes(ValidationPipe)
  @MessagePattern({ subject: 'order', cmd: 'find-all' })
  async execute(findOrderDto: FindOrderDto): Promise<Order[]> {
    return await this.findOrderUsecase.execute(findOrderDto);
  }
}
