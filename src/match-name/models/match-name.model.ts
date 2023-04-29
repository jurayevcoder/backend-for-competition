import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { FinishedMatch } from "src/finished-match/models/finished-match.model";
import { Match } from "src/match/models/match.model";

interface MatchNameAttr {
    name: string;
}

@Table({ tableName: "matchnames" })
export class MatchName extends Model<MatchName, MatchNameAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @HasMany(() => Match)
    match: Match

    @HasMany(() => FinishedMatch)
    finishedmatch: FinishedMatch
}