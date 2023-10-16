import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";  
import mongoose, { HydratedDocument } from "mongoose";
import { Speciality } from "../../speciality/schemas/speciality.schema";



export type WorkerDocument = HydratedDocument<Worker>; 

@Schema({versionKey:false})
export class Worker{
  @Prop({required:true})
  name:string

  @Prop({required:true})
  age:number;

  @Prop({required:true})
  experience:string;


  @Prop({required:true})
  phone_number:string;

  @Prop({required:true,unique:true})
  username:string;

  @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Speciality'})
  speciality_id: string;

  @Prop()
  description:string;

}
export const WorkerSchema = SchemaFactory.createForClass(Worker)
