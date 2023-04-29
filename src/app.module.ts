import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MatchModule } from './match/match.module';
import { MatchNameModule } from './match-name/match-name.module';
import { FinishedMatchModule } from './finished-match/finished-match.module';
import { Match } from './match/models/match.model';
import { MatchName } from './match-name/models/match-name.model';
import { FinishedMatch } from './finished-match/models/finished-match.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Match, MatchName, FinishedMatch],
      autoLoadModels: true,
      logging: false,
    }),
    MatchModule,
    MatchNameModule,
    FinishedMatchModule
    
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}