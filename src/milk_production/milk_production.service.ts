import { Injectable } from '@nestjs/common';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { MilkProduction, MilkProductionDocument } from './schemas/milk_production.schema';
import { Model } from 'mongoose';

@Injectable()
export class MilkProductionService {
  constructor(
    @InjectModel(MilkProduction.name) private mProductionModel:Model<MilkProductionDocument>
  ){}
  create(createMilkProductionDto: CreateMilkProductionDto) {
    return this.mProductionModel.create(createMilkProductionDto);
  }

  findAll() {
    return `This action returns all milkProduction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} milkProduction`;
  }

  update(id: number, updateMilkProductionDto: UpdateMilkProductionDto) {
    return `This action updates a #${id} milkProduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} milkProduction`;
  }
}
