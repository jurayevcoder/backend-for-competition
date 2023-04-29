import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { MatchName } from "src/match-name/models/match-name.model";

interface MatchAttr {
    match_name_id: number;
    team_name_1: string;
    team_name_2: string;
    team_img_1: string;
    team_img_2: string;
    team_score_1: number;
    team_score_2: number;
    date: string;
    time: string;
}

@Table({ tableName: "matchs" })
export class Match extends Model<Match, MatchAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => MatchName)
    @Column({
        type: DataType.INTEGER
    })
    match_name_id: number;
    @BelongsTo(() => MatchName)
    matchname: MatchName

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    team_name_1: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    team_name_2: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    team_img_1: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    team_img_2: string;

    @Column({
        type: DataType.INTEGER,
    })
    team_score_1: number;

    @Column({
        type: DataType.INTEGER,
    })
    team_score_2: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    date: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    time: string;
}