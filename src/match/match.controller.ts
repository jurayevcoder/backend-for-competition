import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Match } from './models/match.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Match")
@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @ApiOperation({summary: "Match create"})
  @Post('create')
  createMatch(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.createMatch(createMatchDto);
  }

  @ApiOperation({summary: "Match find-all"})
  @Get('find-all')
  findAllMatch() {
    return this.matchService.findAllMatch();
  }

  @ApiOperation({summary: "Match find-all id"})
  @Get('find/:id')
  findOneMatch(@Param('id') id: string):Promise<Match> {
    return this.matchService.findOneMatch(+id);
  }

  @ApiOperation({summary: "Match update id"})
  @Put('update/:id')
  updateMatch(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchService.updateMatch(+id, updateMatchDto);
  }

  @ApiOperation({summary: "Match delete id"})
  @Delete('delete/:id')
  removeMatch(@Param('id') id: string) {
    return this.matchService.removeMatch(+id);
  }
}
