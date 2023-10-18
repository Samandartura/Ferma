import { Injectable } from '@nestjs/common';
import { CreateFeddingDto } from './dto/create-fedding.dto';
import { UpdateFeddingDto } from './dto/update-fedding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Fedding, FeddingDocument } from './schemas/fedding.schema';
import { Model } from 'mongoose';
import { formatWithOptions } from 'util';

@Injectable()
export class FeddingService {
  constructor(
    @InjectModel(Fedding.name) private feddingModul:Model<FeddingDocument>
  ){}
  create(createFeddingDto: CreateFeddingDto) {
    return this.feddingModul.create(createFeddingDto) ;
  }

  findAll() {
    return this.feddingModul.find();
  }

  findOne(id: string) {
    return this.feddingModul.findOne({id}).exec();
  }

  update(id: string, updateFeddingDto: UpdateFeddingDto) {
    return this.feddingModul.updateOne({id},updateFeddingDto,{new:true});
  }

  remove(id: string) {
    return this.feddingModul.deleteOne({id});
  }
}
