import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type InfoDocument = HydratedDocument<Info>;

@Schema({versionKey:false})
export class Info {
  @Prop({required:true})
  weight:string;

  @Prop({required:true})
  color:string;

  @Prop({required:true})
  height:string;

  @Prop({required:true})
  breed:string;

  @Prop({required:true})
  gender:string;

  @Prop({})
  birth_or_acquisition:Date;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Block'})
  block_id:string;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Animal'})
  animal_id:string;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Info'})
  parent_id:string;
}


export const InfoSchema = SchemaFactory.createForClass(Info)