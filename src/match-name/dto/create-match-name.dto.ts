import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMatchNameDto {
    @ApiProperty({ example: "la liga", description: "Match nomi" })
    @IsString()
    @IsNotEmpty()
    name: string;
}
