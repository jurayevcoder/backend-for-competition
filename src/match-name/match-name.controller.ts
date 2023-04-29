import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MatchNameService } from './match-name.service';
import { CreateMatchNameDto } from './dto/create-match-name.dto';
import { UpdateMatchNameDto } from './dto/update-match-name.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Match Name")
@Controller('match-name')
export class MatchNameController {
  constructor(private readonly matchNameService: MatchNameService) { }

  @ApiOperation({summary: "Match name create"})
  @Post('create')
  createMatchName(@Body() createMatchNameDto: CreateMatchNameDto) {
    return this.matchNameService.createMatchName(createMatchNameDto);
  }

  @ApiOperation({summary: "Match name find-all"})
  @Get('find-all')
  findAllMatchName() {
    return this.matchNameService.findAllMatchName();
  }

  @ApiOperation({summary: "Match name week start"})
  @Get('week-start')
  findWeekStart() {
    return this.matchNameService.findWeekStart();
  }

  @ApiOperation({summary: "Match name week finish"})
  @Get('week-finish')
  findWeekFinish() {
    return this.matchNameService.findWeekFinish();
  }

  @ApiOperation({summary: "Match name update id"})
  @Put('update/:id')
  updateMatchName(@Param('id') id: string, @Body() updateMatchNameDto: UpdateMatchNameDto) {
    return this.matchNameService.updateMatchName(+id, updateMatchNameDto);
  }

  @ApiOperation({summary: "Match name delete id"})
  @Delete('detete/:id')
  removeMatchName(@Param('id') id: string) {
    return this.matchNameService.removeMatchName(+id);
  }
}
