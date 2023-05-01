import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNewsDto {
    @ApiProperty({ example: "https://media", description: "Video yoki rasmm" })
    @IsString()
    @IsNotEmpty()
    media: string;

    @ApiProperty({ example: "title", description: "Title" })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: "description", description: "Description" })
    @IsString()
    @IsNotEmpty()
    description: string;
}
