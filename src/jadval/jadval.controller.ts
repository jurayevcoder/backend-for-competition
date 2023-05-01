import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JadvalService } from './jadval.service';
import { CreateJadvalDto } from './dto/create-jadval.dto';
import { UpdateJadvalDto } from './dto/update-jadval.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Jadval")
@Controller('jadval')
export class JadvalController {
  constructor(private readonly jadvalService: JadvalService) {}
  
  @ApiOperation({summary: "Jadvalni ko'rish"})
  @Get('find-all')
  findAll() {
    return this.jadvalService.findAllJadval();
  }

  @ApiOperation({summary: "Jadvalni ko'rish id"})
  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.jadvalService.findOneJadval(+id);
  }

  // @ApiOperation({summary: "Jadvalni update id"})
  // @Patch('update/:id')
  // update(@Param('id') id: string, @Body() updateJadvalDto: UpdateJadvalDto) {
  //   return this.jadvalService.updateJadval(+id, updateJadvalDto);
  // }
  
  @ApiOperation({summary: "Jadvalni o'chirish id"})
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.jadvalService.removeJadval(+id);
  }
}
