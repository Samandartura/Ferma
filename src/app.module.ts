import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AdminModule } from './admin/admin.module';
import { WorkersModule } from './workers/workers.module';
import { BlocksModule } from './blocks/blocks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialityModule } from './speciality/speciality.module';
import { AnimalTypeModule } from './animal_type/animal_type.module';
import { AnimalModule } from './animal/animal.module';
import { VacancyModule } from './vacancy/vacancy.module';
import { VacancyHistoryModule } from './vacancy_history/vacancy_history.module';
import { MeatProductionModule } from './meat_production/meat_production.module';
import { FiberProductionModule } from './fiber_production/fiber_production.module';
import { MilkProductionModule } from './milk_production/milk_production.module';
import { FeddingModule } from './fedding/fedding.module';
import { RecordOfFeddingModule } from './record_of_fedding/record_of_fedding.module';
import { InfoModule } from './info/info.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath:'.env',isGlobal:true}),
      MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    WorkersModule,
    BlocksModule,
    SpecialityModule,
    AnimalTypeModule,
    AnimalModule,
    VacancyModule,
    VacancyHistoryModule,
    MeatProductionModule,
    FiberProductionModule,
    MilkProductionModule,
    FeddingModule,
    RecordOfFeddingModule,
    InfoModule,
  ],
  
  controllers: [],
  providers: [],
})
export class AppModule {}
