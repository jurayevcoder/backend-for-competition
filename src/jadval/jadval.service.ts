import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJadvalDto } from './dto/create-jadval.dto';
import { UpdateJadvalDto } from './dto/update-jadval.dto';
import { Jadval } from './models/jadval.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class JadvalService {
  constructor(
    @InjectModel(Jadval) private jadvalRepo: typeof Jadval,
  ) { }

  async findAllJadval() {
    try {
      await this.jadvalRepo.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const match = await this.jadvalRepo.findAll({ include: { all: true } });
    
    return match;
  }

  async findOneJadval(id: number): Promise<Jadval> {
    try {
      await this.jadvalRepo.findByPk(id);
    } catch (error) {
      throw new NotFoundException
    }
    const match = await this.jadvalRepo.findByPk(id);
    return match;
  }

  async removeJadval(id: number) {
    try {
      await this.jadvalRepo.destroy({ where: { id } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    return await this.jadvalRepo.destroy({ where: { id } });
  }
}