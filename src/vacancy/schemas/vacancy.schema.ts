import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type VacancyDocument =HydratedDocument<Vacancy>;

@Schema({versionKey:false})
export class Vacancy {
  @Prop({required:true})
  vacancy_type:string;

  @Prop({required:true})
  vacancy_name:string
}

export const VacancySchema = SchemaFactory.createForClass(Vacancy)