import { Injectable } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vacancy, VacancyDocument } from './schemas/vacancy.schema';
import { Model } from 'mongoose';

@Injectable()
export class VacancyService {
  constructor(
    @InjectModel(Vacancy.name) private vacancyModel:Model<VacancyDocument>
  ){}
  create(createVacancyDto: CreateVacancyDto) {
    return this.vacancyModel.create(createVacancyDto);
  }

  findAll() {
    return this.vacancyModel.find().exec();
  }

  findOne(id: string) {
    return this.vacancyModel.findOne().exec();
  }

  update(id: string, updateVacancyDto: UpdateVacancyDto) {
    return this.vacancyModel.updateOne({id},updateVacancyDto,{new:true});
  }

  remove(id: string) {
    return this.vacancyModel.deleteOne({id});
  }
}
