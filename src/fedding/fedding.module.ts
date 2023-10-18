import { Module } from '@nestjs/common';
import { FeddingService } from './fedding.service';
import { FeddingController } from './fedding.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fedding, FeddingSchema } from './schemas/fedding.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Fedding.name,schema:FeddingSchema}])
  ],
  controllers: [FeddingController],
  providers: [FeddingService],
})
export class FeddingModule {}
