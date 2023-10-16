import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type MilkProductionDocument = HydratedDocument<MilkProduction>

@Schema({versionKey:false})
export class MilkProduction {
  @Prop({required:true})
  milk_yield:number;

  @Prop({required:true})
  milk_schedule:string;

  @Prop({required:true})
  milk_quantity:number;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Animal'})
  animal_id:string;
}

export const MilkProductionSchema = SchemaFactory.createForClass(MilkProduction)