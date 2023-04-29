import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, MinLength, isNotEmpty } from "class-validator";

export class CreateMatchDto {
    @ApiProperty({ example: "1", description: "Match nomi" })
    @IsNumber()
    @IsNotEmpty()
    match_name_id: number;

    @ApiProperty({ example: "Roma", description: "1 - Komanda nomi" })
    @IsString()
    @IsNotEmpty()
    team_name_1: string;

    @ApiProperty({ example: "Roma", description: "2 - Komanda nomi" })
    @IsString()
    @IsNotEmpty()
    team_name_2: string;

    @ApiProperty({ example: "https://logo/roma", description: "1 - Komanda logosi" })
    @IsString()
    @IsNotEmpty()
    team_img_1: string;

    @ApiProperty({ example: "https://logo/roma", description: "2 - Komanda logosi" })
    @IsString()
    @IsNotEmpty()
    team_img_2: string;

    @ApiProperty({ example: "dd.mm.yyyy", description: "o'yin sanasi" })
    @IsString()
    @IsNotEmpty()
    date: string;

    @ApiProperty({ example: "15:00", description: "o'yin vaqti" })
    @IsString()
    @IsNotEmpty()
    time: string;
}