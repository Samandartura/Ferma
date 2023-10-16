import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import {  WorkersController } from './workers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Worker, WorkerSchema } from './schemas/worker.schema';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Speciality, SpecialitySchema } from '../speciality/schemas/speciality.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Worker.name,schema:WorkerSchema},
      {name:Speciality.name,schema:SpecialitySchema }
    ]),
  ],
  controllers: [WorkersController],
  providers: [WorkersService],
  // exports:[WorkersService]
})
export class WorkersModule {}
