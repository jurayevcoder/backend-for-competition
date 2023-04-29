import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Match } from './models/match.model';
import { FinishedMatch } from 'src/finished-match/models/finished-match.model';

@Module({
  imports: [SequelizeModule.forFeature([Match, FinishedMatch])],
  controllers: [MatchController],
  providers: [MatchService]
})
export class MatchModule {}
