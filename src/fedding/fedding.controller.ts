import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeddingService } from './fedding.service';
import { CreateFeddingDto } from './dto/create-fedding.dto';
import { UpdateFeddingDto } from './dto/update-fedding.dto';

@Controller('fedding')
export class FeddingController {
  constructor(private readonly feddingService: FeddingService) {}

  @Post()
  create(@Body() createFeddingDto: CreateFeddingDto) {
    return this.feddingService.create(createFeddingDto);
  }

  @Get()
  findAll() {
    return this.feddingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feddingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeddingDto: UpdateFeddingDto) {
    return this.feddingService.update(id, updateFeddingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feddingService.remove(id);
  }
}
