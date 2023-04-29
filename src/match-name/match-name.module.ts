import { Module } from '@nestjs/common';
import { MatchNameService } from './match-name.service';
import { MatchNameController } from './match-name.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MatchName } from './models/match-name.model';

@Module({
  imports: [SequelizeModule.forFeature([MatchName])],
  controllers: [MatchNameController],
  providers: [MatchNameService]
})
export class MatchNameModule {}
