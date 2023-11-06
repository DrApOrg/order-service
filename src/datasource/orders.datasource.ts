import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersRepository {
  constructor(@InjectModel(Order.name) private orderRepository: Model<Order>) {}

  async findAllByUserId(userId: string): Promise<Order[]> {
    return await this.orderRepository.find({ userId }, { userId: 0, _id: 0 });
  }

  async createOrder(order: Order): Promise<void> {
    await this.orderRepository.create(order);
  }
}
