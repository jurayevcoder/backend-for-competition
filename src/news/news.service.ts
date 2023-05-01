import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectModel } from '@nestjs/sequelize';
import { News } from './models/news.model';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News) private newsRepo: typeof News,
  ) { }

  async createNews(createNewsDto: CreateNewsDto) {
    await this.newsRepo.create({ ...createNewsDto })
    const response = {
      messages: "News create",
    }
    return response;
  }

  async findAllNews() {
    try {
      await this.newsRepo.findAll({ include: { all: true } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const news = await this.newsRepo.findAll({ include: { all: true } });
    return news;
  }

  async findOneNews(id: number): Promise<News> {
    try {
      await this.newsRepo.findByPk(id);
    } catch (error) {
      throw new NotFoundException
    }
    const news = await this.newsRepo.findByPk(id);
    return news;
  }


  async updateNews(id: number, updateNewsDto: UpdateNewsDto) {
    try {
      await this.newsRepo.update(updateNewsDto, { where: { id } })
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    const news = await this.newsRepo.update(updateNewsDto, { where: { id } })
    return news;
  }

  async removeNews(id: number) {
    try {
      await this.newsRepo.destroy({ where: { id } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException
    }
    return await this.newsRepo.destroy({ where: { id } });
  }
}
