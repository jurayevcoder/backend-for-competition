import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Match } from './models/match.model';
import { FinishedMatch } from 'src/finished-match/models/finished-match.model';
import { Jadval } from 'src/jadval/models/jadval.model';

@Injectable()
export class MatchService {
  constructor(
    @InjectModel(Match) private matchRepo: typeof Match,
    @InjectModel(FinishedMatch) private finishedMatchRepo: typeof FinishedMatch,
    @InjectModel(Jadval) private jadvalRepo: typeof Jadval,

  ) { }
  async createMatch(createMatchDto: CreateMatchDto) {
    try {
      await this.matchRepo.findOne({ where: { date: createMatchDto.date, time: createMatchDto.time, team_name_1: createMatchDto.team_name_1, team_name_2: createMatchDto.team_name_2 } })
      await this.matchRepo.findOne({ where: { date: createMatchDto.date, time: createMatchDto.time, team_name_1: createMatchDto.team_name_2, team_name_2: createMatchDto.team_name_1 } })

    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const match = await this.matchRepo.findOne({ where: { date: createMatchDto.date, time: createMatchDto.time, team_name_1: createMatchDto.team_name_1, team_name_2: createMatchDto.team_name_2 } })
    const matchs = await this.matchRepo.findOne({ where: { date: createMatchDto.date, time: createMatchDto.time, team_name_1: createMatchDto.team_name_2, team_name_2: createMatchDto.team_name_1 } })

    let response: any;
    if (!match && !matchs) {
      await this.matchRepo.create({ ...createMatchDto })

      response = {
        messages: "Match create!",
      }
    }
    else {
      response = {
        messages: "Match olredy existn!",
      }
    }
    return response;

  }

  async findAllMatch() {
    try {
      await this.matchRepo.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const match = await this.matchRepo.findAll({ include: { all: true } });
    return match;
  }

  async findOneMatch(id: number): Promise<Match> {
    try {
      await this.matchRepo.findByPk(id);
    } catch (error) {
      throw new NotFoundException
    }
    const user = await this.matchRepo.findByPk(id);
    return user;
  }

  async updateMatch(id: number, updateMatchDto: UpdateMatchDto) {
    try {
      await this.matchRepo.update(updateMatchDto, { where: { id } })
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    await this.matchRepo.update(updateMatchDto, { where: { id } })


    try {
      await this.matchRepo.findOne({ where: { id } })
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const finishedMatch = await this.matchRepo.findOne({ where: { id } })
    const obj = finishedMatch.dataValues

    await this.finishedMatchRepo.create({
      match_name_id: obj.match_name_id,
      team_name_1: obj.team_name_1,
      team_name_2: obj.team_name_2,
      team_img_1: obj.team_img_1,
      team_img_2: obj.team_img_2,
      team_score_1: obj.team_score_1,
      team_score_2: obj.team_score_2,
      date: obj.date,
      time: obj.time
    })

    const test1 = await this.jadvalRepo.findOne({ where: { team_name: obj.team_name_1 } })
    const test2 = await this.jadvalRepo.findOne({ where: { team_name: obj.team_name_2 } })
    if (!test1) {
      if (obj.team_score_1 > obj.team_score_2) {
        await this.jadvalRepo.create({
          team_name: obj.team_name_1,
          team_img: obj.team_img_1,
          game: 1,
          ball: 3
        })
      }
      else {
        await this.jadvalRepo.create({
          team_name: obj.team_name_1,
          team_img: obj.team_img_1,
          game: 1,
          ball: 1
        })
      }
    }
    else {
      if (obj.team_score_1 > obj.team_score_2) {
        test1.update({ game: test1.game + 1, ball: test1.ball + 3 })
      }
      else {
        test1.update({ game: test1.game + 1, ball: test1.ball + 1 })
      }
    }


    if (!test2) {
      if (obj.team_score_1 < obj.team_score_2) {
        await this.jadvalRepo.create({
          team_name: obj.team_name_2,
          team_img: obj.team_img_2,
          game: 1,
          ball: 3
        })
      }
      else {
        await this.jadvalRepo.create({
          team_name: obj.team_name_2,
          team_img: obj.team_img_2,
          game: 1,
          ball: 1
        })
      }
    }
    else {
      if (obj.team_score_1 < obj.team_score_2) {
        test2.update({ game: test2.game + 1, ball: test2.ball + 3 })
      }
      else {
        test2.update({ game: test2.game + 1, ball: test2.ball + 1 })
      }
    }


    await this.matchRepo.destroy({ where: { id } })

    const response = {
      messages: "Match update and Finished Match add!"
    }

    return response;
  }


  async removeMatch(id: number) {
    try {
      await this.matchRepo.destroy({ where: { id } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    return await this.matchRepo.destroy({ where: { id } });
  }
}
