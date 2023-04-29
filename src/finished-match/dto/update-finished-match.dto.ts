import { ApiProperty } from "@nestjs/swagger";

export class UpdateFinishedMatchDto {
    @ApiProperty({ example: "1", description: "Match nomi" })
    match_name_id?: number;

    @ApiProperty({ example: "Roma", description: "1 - Komanda nomi" })
    team_name_1?: string;

    @ApiProperty({ example: "Roma", description: "2 - Komanda nomi" })
    team_name_2?: string;

    @ApiProperty({ example: "https://logo/roma", description: "1 - Komanda logosi" })
    team_img_1?: string;

    @ApiProperty({ example: "https://logo/roma", description: "2 - Komanda logosi" })
    team_img_2?: string;

    @ApiProperty({ example: "dd.mm.yyyy", description: "o'yin sanasi" })
    date?: string;

    @ApiProperty({ example: "15:00", description: "o'yin vaqti" })
    time?: string;
}
