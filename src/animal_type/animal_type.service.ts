import { Injectable } from '@nestjs/common';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AnimalType, AnimalTypeDocument } from './schemas/animal_type.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnimalTypeService {
  constructor(
    @InjectModel(AnimalType.name) private aTypeModel:Model<AnimalTypeDocument>
  ){}
  create(createAnimalTypeDto: CreateAnimalTypeDto) {
    return this.aTypeModel.create(createAnimalTypeDto);
  }

  findAll() {
    return this.aTypeModel.find().populate('Animal');
  }

  findOne(id: string) {
    return this.aTypeModel.findOne({id}).populate('Animal');
  }

  update(id: string, updateAnimalTypeDto: UpdateAnimalTypeDto) {
    return this.aTypeModel.updateOne({id},updateAnimalTypeDto,{new:true}).exec();
  }

  remove(id: string) {
    return this.aTypeModel.deleteOne({id});
  }
}
