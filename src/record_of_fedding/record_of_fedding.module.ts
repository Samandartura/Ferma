import { Module } from '@nestjs/common';
import { RecordOfFeddingService } from './record_of_fedding.service';
import { RecordOfFeddingController } from './record_of_fedding.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordOfFedding, RecordOfFeddingSchema } from './schemas/record_of_fedding.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:RecordOfFedding.name,schema:RecordOfFeddingSchema}])
  ],
  controllers: [RecordOfFeddingController],
  providers: [RecordOfFeddingService],
})
export class RecordOfFeddingModule {}
