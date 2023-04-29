import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatchNameDto } from './dto/create-match-name.dto';
import { UpdateMatchNameDto } from './dto/update-match-name.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MatchName } from './models/match-name.model';
import { toUSVString } from 'util';
import { timestamp } from 'rxjs';

@Injectable()
export class MatchNameService {
  constructor(
    @InjectModel(MatchName) private matchNameRepo: typeof MatchName,
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
      await this.matchNameRepo.findAll({include: {all: true}})
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const week = await this.matchNameRepo.findAll({include: {all: true}})
    // console.log(week);
    
    const weekfinished = new Date()
    weekfinished.setDate(weekfinished.getDate() + 7);
    console.log(weekfinished);
    
    const day = weekfinished.getDate() - 1
    const month = weekfinished.getMonth() + 1
    const year = weekfinished.getFullYear()
    const time = weekfinished.getHours()
    const min = weekfinished.getMinutes()


    let list = '';
    let a = week[0].dataValues.match;
    for (let i in a) {
      list = a[i].dataValues.date
      list.split('.')
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
    let a = week[0].dataValues.match;
    for (let i in a) {
      console.log(a[i].dataValues.date);
    }
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
