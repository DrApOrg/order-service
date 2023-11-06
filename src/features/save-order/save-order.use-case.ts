import { Controller, Logger } from '@nestjs/common';
import { OrdersRepository } from 'src/datasource/orders.datasource';
import { OrderDto } from 'src/dto/order.dto';

@Controller()
export class SaveOrderUseCase {
  constructor(private readonly orderRepository: OrdersRepository) {}

  async execute(order: OrderDto): Promise<void> {
    Logger.log(
      `${this.constructor.name}.execute() => ${JSON.stringify(order)}`,
    );

    // mapper
    this.orderRepository.createOrder({
      userId: order.userId,
      orderDate: order.orderDate,
      address: order.address,
      usedDiscountCode: order.usedDiscountCode,
      products: order.products,
      isCompleted: false,
    });
  }
}
