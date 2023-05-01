import { Module } from '@nestjs/common';
import { JadvalService } from './jadval.service';
import { JadvalController } from './jadval.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Jadval } from './models/jadval.model';

@Module({
  imports: [SequelizeModule.forFeature([Jadval])],
  controllers: [JadvalController],
  providers: [JadvalService]
})
export class JadvalModule {}
