import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { News } from './models/news.model';

@ApiTags("News")
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @ApiOperation({summary: "News create"})
  @Post('create')
  createNews(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.createNews(createNewsDto);
  }

  @ApiOperation({summary: "News find-all"})
  @Get('find-all')
  findAllNews() {
    return this.newsService.findAllNews();
  }

  @ApiOperation({summary: "News find-all id"})
  @Get('find/:id')
  findOneNews(@Param('id') id: string):Promise<News> {
    return this.newsService.findOneNews(+id);
  }

  @ApiOperation({summary: "News update id"})
  @Put('update/:id')
  updateNews(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.updateNews(+id, updateNewsDto);
  }

  @ApiOperation({summary: "News delete id"})
  @Delete('delete/:id')
  removeNews(@Param('id') id: string) {
    return this.newsService.removeNews(+id);
  }
}
