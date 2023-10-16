import { Module } from '@nestjs/common';
import { VacancyHistoryService } from './vacancy_history.service';
import { VacancyHistoryController } from './vacancy_history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { VacancyHistory, VacancyHistorySchema } from './schemas/vacancy_history.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:VacancyHistory.name,schema:VacancyHistorySchema}])
  ],
  controllers: [VacancyHistoryController],
  providers: [VacancyHistoryService],
})
export class VacancyHistoryModule {}
