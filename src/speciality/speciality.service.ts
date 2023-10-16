import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Speciality, SpecialityDocument } from './schemas/speciality.schema';
import { Model } from 'mongoose';

@Injectable()
export class SpecialityService {
  constructor(
    @InjectModel(Speciality.name) private specModel:Model<SpecialityDocument>
  ){}
  async create(createSpecialityDto: CreateSpecialityDto) {
    return this.specModel.create(createSpecialityDto);
  }

  async findAll() {
    return this.specModel.find().populate('workers');
  }

  findOne(id: string) {
    return this.specModel.findById(id).populate('workers');
  }

  update(id: string, updateSpecialityDto: UpdateSpecialityDto) {
    const updated = this.specModel.findByIdAndUpdate(id,updateSpecialityDto,{new:true});
    if(!updated){
      throw new NotFoundException('Yangilanadigan malumot topilmadi')
    }
    return updated;
  }

  remove(id: string) {
    const deleted = this.specModel.findByIdAndDelete(id);
    if(deleted){
      throw new NotFoundException("removed file not found")
    }
    return deleted;
  }
}
