import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchNameDto } from './create-match-name.dto';

export class UpdateMatchNameDto extends PartialType(CreateMatchNameDto) {}
