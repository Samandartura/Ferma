import { Injectable } from '@nestjs/common';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FiberProduction, FiberProductionDocument } from './schemas/fiber_production.schema';
import { Model } from 'mongoose';

@Injectable()
export class FiberProductionService {
  constructor(
    @InjectModel(FiberProduction.name) private fProdactionModel:Model<FiberProductionDocument>
  ){}
  create(createFiberProductionDto: CreateFiberProductionDto) {
    return this.fProdactionModel.create(createFiberProductionDto);
  }

  findAll() {
    return this.fProdactionModel.find().exec();
  }

  findOne(id: string) {
    return this.fProdactionModel.findOne().exec();
  }

  update(id: string, updateFiberProductionDto: UpdateFiberProductionDto) {
    return this.fProdactionModel.updateOne({id},updateFiberProductionDto,{new:true});
  }

  remove(id: string) {
    return this.fProdactionModel.deleteOne({id});
  }
}
