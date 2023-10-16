import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal, AnimalDocument } from './schema/animal.schema';
import { Model } from 'mongoose';
import { AnimalType, AnimalTypeDocument } from '../animal_type/schemas/animal_type.schema';

@Injectable()
export class AnimalService {
  constructor(
    @InjectModel(Animal.name) private animalModel:Model<AnimalDocument>,
    @InjectModel(AnimalType.name) private aTypeModel:Model<AnimalTypeDocument>
  ){}
  async create(createAnimalDto: CreateAnimalDto) {
    const {animal_type_id} = createAnimalDto;
    const type1 = await this.aTypeModel.findOne({animal_type_id})
    if(!type1){
      throw new BadRequestException('bunday type topilmadi')
    }
    const animal =await  this.animalModel.create(createAnimalDto)
    type1.animals.push(animal)
    return animal;
  }

  findAll() {
    return this.animalModel.find().exec();
  }

  findOne(id: string) {
    return this.animalModel.findOne({id}).exec();
  }

  update(id: string, updateAnimalDto: UpdateAnimalDto) {
    return this.animalModel.updateOne({id},updateAnimalDto,{new:true});
  }

  remove(id: string) {
    return this.animalModel.deleteOne({id});
  }
}
