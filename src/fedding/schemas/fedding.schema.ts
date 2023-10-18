import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type FeddingDocument = HydratedDocument<Fedding>;

@Schema({versionKey:false})
export class Fedding {

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Animal'})
  animal_id:string;

  @Prop({})
  fedding_schedule:string;

  @Prop({})
  type_of_feddd;

  @Prop({})
  dietary:string;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Worker'})
  worker_id:string
}


export const FeddingSchema = SchemaFactory.createForClass(Fedding)