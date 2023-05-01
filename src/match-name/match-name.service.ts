import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatchNameDto } from './dto/create-match-name.dto';
import { UpdateMatchNameDto } from './dto/update-match-name.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MatchName } from './models/match-name.model';
import { toUSVString } from 'util';
import { timestamp } from 'rxjs';
import { Match } from 'src/match/models/match.model';

@Injectable()
export class MatchNameService {
  constructor(
    @InjectModel(MatchName) private matchNameRepo: typeof MatchName,
    @InjectModel(Match) private matchRepo: typeof Match,
  ) { }
  async createMatchName(createMatchNameDto: CreateMatchNameDto) {
    try {
      await this.matchNameRepo.findOne({ where: { name: createMatchNameDto.name } })
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const match = await this.matchNameRepo.findOne({ where: { name: createMatchNameDto.name } })

    let response: any;
    if (!match) {
      await this.matchNameRepo.create({ ...createMatchNameDto })
      response = {
        messages: "Match Name create",
      }
    }
    else {
      response = {
        messages: "Match Name olredy existn"
      }
    }
    return response;
  }

  async findAllMatchName() {
    try {
      await this.matchNameRepo.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const matchName = await this.matchNameRepo.findAll({ include: { all: true } });
    return matchName;
  }

  async findWeekStart() {
    try {
      await this.matchNameRepo.findAll({ include: { all: true } })
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const week = await this.matchNameRepo.findAll({ include: { all: true } })
    // console.log(week);

    const weekfinished = new Date()
    weekfinished.setDate(weekfinished.getDate() + 7);

    const newDate = new Date()
    newDate.setDate(newDate.getDate());
    // console.log(week);


    let lists = [];
    let find: any;

    const a = week[0].dataValues.finishedmatch;
    for (let i in a) {
      
      const list = new Date(a[i].dataValues.date)
      list.setDate(list.getDate() + 1)


      if (weekfinished >= list && list >= newDate) {
        find = await this.matchRepo.findOne({ where: { id: a[i].dataValues.id } })
        lists.push(find)
        console.log(a[i].dataValues.id);
      }
    }
  }

  async findWeekFinish() {
    try {
      await this.matchNameRepo.findAll()
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const week = await this.matchNameRepo.findAll()

    const weekfinished = new Date()
    weekfinished.setDate(weekfinished.getDate() - 7);

    const newDate = new Date()
    newDate.setDate(newDate.getDate());


    let lists = [];
    let find: any;

    const a = week[0].dataValues.match;
    for (let i in a) {
      const list = new Date(a[i].dataValues.date)
      list.setDate(list.getDate() + 1)

      console.log(list);

      if (weekfinished <= list && list <= newDate) {
        find = await this.matchRepo.findOne({ where: { id: a[i].dataValues.id } })
        lists.push(find)
        console.log(a[i].dataValues.id);
      }
    }

    console.log(weekfinished, "finish");
    console.log(newDate, "new");



  }

  async updateMatchName(id: number, updateMatchNameDto: UpdateMatchNameDto) {
    try {
      await this.matchNameRepo.update(updateMatchNameDto, { where: { id } })
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const match = await this.matchNameRepo.update(updateMatchNameDto, { where: { id } })
    return match;
  }

  async removeMatchName(id: number) {
    try {
      await this.matchNameRepo.destroy({ where: { id } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    return await this.matchNameRepo.destroy({ where: { id } });
  }
}
