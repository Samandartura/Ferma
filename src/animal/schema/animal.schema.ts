import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import mongoose, { HydratedDocument } from "mongoose";

export type AnimalDocument = HydratedDocument<Animal>;

@Schema({versionKey:false})
export class Animal {
  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'AnimalType'})
  animal_type_id:string

  @Prop()
  photo:string;

  @Prop()
  unique_id:number
}

export const AnimalSchema = SchemaFactory.createForClass(Animal)