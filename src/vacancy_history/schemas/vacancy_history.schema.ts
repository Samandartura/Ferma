import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Vacancy } from "../../vacancy/schemas/vacancy.schema";


export type VacancyHistoryDocument = HydratedDocument<VacancyHistory>;

@Schema({versionKey:false})
export class VacancyHistory {
  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Animal'})
  animal_id:string;

  @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref:'Vacancy'}]})
  vacansy_type:Vacancy;

  @Prop({required:true})
  vacancy_date:Date;

  @Prop()
  next_vacancy_date:Date;

  @Prop()
  vacancy_photo:string;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Worker"})
  worker_id:string
  
}


export const VacancyHistorySchema = SchemaFactory.createForClass(VacancyHistory)