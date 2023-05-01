import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { MatchName } from "src/match-name/models/match-name.model";

interface NewsAttr {
    media: string;
    title: string;
    description: string;
}

@Table({ tableName: "news" })
export class News extends Model<News, NewsAttr> {
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
    media: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    date: Date;
}