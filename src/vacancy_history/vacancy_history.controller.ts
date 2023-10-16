import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VacancyHistoryService } from './vacancy_history.service';
import { CreateVacancyHistoryDto } from './dto/create-vacancy_history.dto';
import { UpdateVacancyHistoryDto } from './dto/update-vacancy_history.dto';

@Controller('vacancy-history')
export class VacancyHistoryController {
  constructor(private readonly vacancyHistoryService: VacancyHistoryService) {}

  @Post()
  create(@Body() createVacancyHistoryDto: CreateVacancyHistoryDto) {
    return this.vacancyHistoryService.create(createVacancyHistoryDto);
  }

  @Get()
  findAll() {
    return this.vacancyHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacancyHistoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVacancyHistoryDto: UpdateVacancyHistoryDto) {
    return this.vacancyHistoryService.update(id, updateVacancyHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vacancyHistoryService.remove(id);
  }
}
