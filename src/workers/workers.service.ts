import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkerDocument,Worker } from './schemas/worker.schema';
import { Speciality, SpecialityDocument } from '../speciality/schemas/speciality.schema';

@Injectable()
export class WorkersService {
  constructor(
    @InjectModel(Worker.name) private workerModel:Model<WorkerDocument>,
    @InjectModel(Speciality.name) private specModel:Model<SpecialityDocument>
  ){}


  async create(createWorkerDto: CreateWorkerDto) {
    const {speciality_id} = createWorkerDto;

    const spec = await this.specModel.findById(speciality_id);    
    if(!spec){
      throw new BadRequestException(" bunday specialist mavjud emas")
    }

    const worker1 = await this.workerModel.create(createWorkerDto);
    spec.workers.push();
    await spec.save();

    return worker1;
  }

  async findAll() {
    return await this.workerModel.find()
  }

  findOne(id: string) {
    return this.workerModel.findById(id).exec();
  }

  async update(id: string, updateWorkerDto: UpdateWorkerDto) {
    const updateWorker = await this.workerModel.findByIdAndUpdate(
      id,updateWorkerDto,{new:true}
    ).exec();
    if(!updateWorker){
      throw new NotFoundException('yangilanadigan foydalanuvchi topilmadi')
    }
    return updateWorker;
  }

  remove(id: string) {
    return this.workerModel.findByIdAndDelete(id);
  }
}
