import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface JadvalAttr {
    team_name: string;
    team_img: string;
    game: number;
    ball: number;
    
}

@Table({ tableName: "jadval" })
export class Jadval extends Model<Jadval, JadvalAttr> {
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
    team_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    team_img: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    game: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    ball: number;
}