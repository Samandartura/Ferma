import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordOfFeddingService } from './record_of_fedding.service';
import { CreateRecordOfFeddingDto } from './dto/create-record_of_fedding.dto';
import { UpdateRecordOfFeddingDto } from './dto/update-record_of_fedding.dto';

@Controller('record-of-fedding')
export class RecordOfFeddingController {
  constructor(private readonly recordOfFeddingService: RecordOfFeddingService) {}

  @Post()
  create(@Body() createRecordOfFeddingDto: CreateRecordOfFeddingDto) {
    return this.recordOfFeddingService.create(createRecordOfFeddingDto);
  }

  @Get()
  findAll() {
    return this.recordOfFeddingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordOfFeddingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordOfFeddingDto: UpdateRecordOfFeddingDto) {
    return this.recordOfFeddingService.update(+id, updateRecordOfFeddingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordOfFeddingService.remove(+id);
  }
}
