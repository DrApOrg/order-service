import { Injectable } from '@nestjs/common';
import { Order } from 'src/datasource/entities/order.entity';
import { OrdersRepository } from 'src/datasource/orders.datasource';
import { FindOrderDto } from './find-order.dto';

@Injectable()
export class FindOrderUseCase {
  constructor(private readonly orderRepository: OrdersRepository) {}

  async execute({ userId }: FindOrderDto): Promise<Order[]> {
    return await this.orderRepository.findAllByUserId(userId);
  }
}
