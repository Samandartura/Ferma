import { Injectable } from '@nestjs/common';
import { CreateRecordOfFeddingDto } from './dto/create-record_of_fedding.dto';
import { UpdateRecordOfFeddingDto } from './dto/update-record_of_fedding.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RecordOfFedding, RecordOfFeddingDocument } from './schemas/record_of_fedding.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecordOfFeddingService {
  constructor(
    @InjectModel(RecordOfFedding.name) private rOfFeddingModel:Model<RecordOfFeddingDocument>
  ){}
  create(createRecordOfFeddingDto: CreateRecordOfFeddingDto) {
    return this.rOfFeddingModel.create(createRecordOfFeddingDto);
  }

  findAll() {
    return `This action returns all recordOfFedding`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recordOfFedding`;
  }

  update(id: number, updateRecordOfFeddingDto: UpdateRecordOfFeddingDto) {
    return `This action updates a #${id} recordOfFedding`;
  }

  remove(id: number) {
    return `This action removes a #${id} recordOfFedding`;
  }
}
