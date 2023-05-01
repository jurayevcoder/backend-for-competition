import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FinishedMatchService } from './finished-match.service';
import { CreateFinishedMatchDto } from './dto/create-finished-match.dto';
import { UpdateFinishedMatchDto } from './dto/update-finished-match.dto';
import { FinishedMatch } from './models/finished-match.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Finished Match")
@Controller('finished-match')
export class FinishedMatchController {
  constructor(private readonly finishedMatchService: FinishedMatchService) {}

  // @ApiOperation({summary: "Finished Match create"})
  // @Post('create')
  // createFinishedMatch(@Body() createFinishedMatchDto: CreateFinishedMatchDto) {
  //   return this.finishedMatchService.createFinishedMatch(createFinishedMatchDto);
  // }

  @ApiOperation({summary: "Finished Match find-all"})
  @Get('find-all')
  findAllFinishedMatch() {
    return this.finishedMatchService.findAllFinishedMatch();
  }

  @ApiOperation({summary: "Finished Match find-all id"})
  @Get('find/:id')
  findOneFinishedMatch(@Param('id') id: string):Promise<FinishedMatch> {
    return this.finishedMatchService.findOneFinishedMatch(+id);
  }

  @ApiOperation({summary: "Finished Match update id"})
  @Put('update/:id')
  updateFinishedMatch(@Param('id') id: string, @Body() updateFinishedMatchDto: UpdateFinishedMatchDto) {
    return this.finishedMatchService.updateFinishedMatch(+id, updateFinishedMatchDto);
  }

  @ApiOperation({summary: "Finished Match delete id"})
  @Delete('delete/:id')
  removeFinishedMatch(@Param('id') id: string) {
    return this.finishedMatchService.removeFinishedMatch(+id);
  }
  
}
