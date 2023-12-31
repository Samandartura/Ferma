import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type SpecialityDocument = HydratedDocument<Speciality>

@Schema({versionKey:false})
export class Speciality {
  @Prop({required:true})
  title:string;

  @Prop({required:true})
  description:string;

  @Prop({type:[{type:mongoose.Schema.Types.ObjectId, ref:'Worker'}]})
  workers:Worker[];
}


export const SpecialitySchema =SchemaFactory.createForClass(Speciality);