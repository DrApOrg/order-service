import {  IsNotEmpty, IsString } from "class-validator";


export class FindOrderDto {
    @IsNotEmpty()
    @IsString()
    userId: string;
} 