import { PartialType } from '@nestjs/mapped-types';
import { CreateVacancyHistoryDto } from './create-vacancy_history.dto';

export class UpdateVacancyHistoryDto extends PartialType(CreateVacancyHistoryDto) {}
