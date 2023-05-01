import { PartialType } from '@nestjs/mapped-types';
import { CreateJadvalDto } from './create-jadval.dto';

export class UpdateJadvalDto extends PartialType(CreateJadvalDto) {}
