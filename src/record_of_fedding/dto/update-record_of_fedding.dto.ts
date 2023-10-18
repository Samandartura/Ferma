import { PartialType } from '@nestjs/mapped-types';
import { CreateRecordOfFeddingDto } from './create-record_of_fedding.dto';

export class UpdateRecordOfFeddingDto extends PartialType(CreateRecordOfFeddingDto) {}
