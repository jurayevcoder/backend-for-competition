import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateMatchDto{
    @ApiProperty({ example: "2", description: "1 - jamoa o'yin hisobi" })
    @IsNumber()
    team_score_1: number;

    @ApiProperty({ example: "2", description: "2 - jamoa o'yin hisobi" })
    @IsNumber()
    team_score_2: number;
}
