import { Controller, UsePipes, ValidationPipe } from "@nestjs/common";
import { SaveOrderUseCase } from "./save-order.use-case";
import { MessagePattern } from "@nestjs/microservices";
import { OrderDto } from "src/dto/order.dto";

@Controller()
export class SaveOrderTcpController {

    constructor(private readonly saveOrderUserCase: SaveOrderUseCase) {}

	@UsePipes(ValidationPipe)
	@MessagePattern({ subject: 'order', cmd: 'save'})
    async execute({ order }: { order: OrderDto; }): Promise<void> {
        return await this.saveOrderUserCase.execute(order);
    } 
}