import { Module } from '@nestjs/common';
import { FinishedMatchService } from './finished-match.service';
import { FinishedMatchController } from './finished-match.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FinishedMatch } from './models/finished-match.model';

@Module({
  imports: [SequelizeModule.forFeature([FinishedMatch])],
  controllers: [FinishedMatchController],
  providers: [FinishedMatchService]
})
export class FinishedMatchModule {}
