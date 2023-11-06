import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderDto } from 'src/dto/order.dto';
import { HttpExceptionFilter } from 'src/http-filter';
import { SaveOrderUseCase } from './save-order.use-case';

@Controller('order')
export class SaveOrderHttpController {
  constructor(private readonly saveOrderUserCase: SaveOrderUseCase) {}

  @UsePipes(ValidationPipe)
  @UseFilters(HttpExceptionFilter)
  @Post('create')
  async execute(@Body() order: OrderDto): Promise<void> {
    this.saveOrderUserCase.execute(order);
  }

  @UseFilters(HttpExceptionFilter)
  @UsePipes(ValidationPipe)
  @Get('test')
  async nose(): Promise<string> {
    return 'hola';
  }
}
