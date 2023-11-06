import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Order {
  @Prop({ type: String })
  userId: string;

  @Prop([{ type: String }])
  products: string[];

  @Prop({ type: Boolean })
  usedDiscountCode: boolean;

  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  orderDate: string;

  @Prop({ type: Boolean })
  isCompleted: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
