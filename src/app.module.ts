import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FindOrderModule } from './features/find-orders/find-order.module';
import { SaveOrderModule } from './features/save-order/save-order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tshop'),
    /*
     * features
     */
    FindOrderModule,
    SaveOrderModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
