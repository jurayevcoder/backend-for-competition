import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFinishedMatchDto } from './dto/create-finished-match.dto';
import { UpdateFinishedMatchDto } from './dto/update-finished-match.dto';
import { FinishedMatch } from './models/finished-match.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class FinishedMatchService {
  constructor(
    @InjectModel(FinishedMatch) private finishedMatchRepo: typeof FinishedMatch,
  ) { }

  async findAllFinishedMatch() {
    try {
      await this.finishedMatchRepo.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const match = await this.finishedMatchRepo.findAll({ include: { all: true } });
    return match;
  }

  async findOneFinishedMatch(id: number): Promise<FinishedMatch> {
    try {
      await this.finishedMatchRepo.findByPk(id);
    } catch (error) {
      throw new NotFoundException
    }
    const match = await this.finishedMatchRepo.findByPk(id);
    return match;
  }

  async updateFinishedMatch(id: number, updateFinishedMatchDto: UpdateFinishedMatchDto) {
    try {
      await this.finishedMatchRepo.update(updateFinishedMatchDto, { where: { id } })
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const match = await this.finishedMatchRepo.update(updateFinishedMatchDto, { where: { id } })
    return match;
  }

  async removeFinishedMatch(id: number) {
    try {
      await this.finishedMatchRepo.destroy({ where: { id } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    return await this.finishedMatchRepo.destroy({ where: { id } });
  }
}
