import { Injectable } from '@nestjs/common';
import { CreateVacancyHistoryDto } from './dto/create-vacancy_history.dto';
import { UpdateVacancyHistoryDto } from './dto/update-vacancy_history.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VacancyHistory, VacancyHistoryDocument } from './schemas/vacancy_history.schema';
import { Model } from 'mongoose';

@Injectable()
export class VacancyHistoryService {
  constructor(
    @InjectModel(VacancyHistory.name) private vHistoryModel:Model<VacancyHistoryDocument>
  ){}
  create(createVacancyHistoryDto: CreateVacancyHistoryDto) {
    return this.vHistoryModel.create(createVacancyHistoryDto);
  }

  findAll() {
    return this.vHistoryModel.find();
  }

  findOne(id: string) {
    return this.vHistoryModel.findOne({id});
  }

  update(id: string, updateVacancyHistoryDto: UpdateVacancyHistoryDto) {
    return this.vHistoryModel.updateOne({id},updateVacancyHistoryDto,{new:true});
  }

  remove(id: string) {
    return this.vHistoryModel.deleteOne({id});
  }
}
