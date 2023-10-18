import { PartialType } from '@nestjs/mapped-types';
import { CreateFeddingDto } from './create-fedding.dto';

export class UpdateFeddingDto extends PartialType(CreateFeddingDto) {}
