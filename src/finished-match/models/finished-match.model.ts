import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { MatchName } from "src/match-name/models/match-name.model";

interface FinishedMatchAttr {
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

@Table({ tableName: "finished_matchs" })
export class FinishedMatch extends Model<FinishedMatch, FinishedMatchAttr> {
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