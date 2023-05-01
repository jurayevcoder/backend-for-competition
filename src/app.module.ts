import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MatchModule } from './match/match.module';
import { MatchNameModule } from './match-name/match-name.module';
import { FinishedMatchModule } from './finished-match/finished-match.module';
import { Match } from './match/models/match.model';
import { MatchName } from './match-name/models/match-name.model';
import { FinishedMatch } from './finished-match/models/finished-match.model';
import { JadvalModule } from './jadval/jadval.module';
import { Jadval } from './jadval/models/jadval.model';
import { NewsModule } from './news/news.module';
import { News } from './news/models/news.model';


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
      models: [Match, MatchName, FinishedMatch, Jadval, News],
      autoLoadModels: true,
      logging: false,
    }),
    MatchModule,
    MatchNameModule,
    FinishedMatchModule,
    JadvalModule,
    NewsModule,
    
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}