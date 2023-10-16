import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import exp from "constants";
import mongoose, { HydratedDocument } from "mongoose";
import { scheduler } from "timers/promises";


export type MeatProductionDocument =HydratedDocument<MeatProduction>;

@Schema({versionKey:false})
export class MeatProduction {
  @Prop({required:true})
  meat_yield:number;

  @Prop({required:true})
  slaughter_date:Date;

  @Prop({required:true})
  shearing_schedule:number;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Animal'})
  animal_id:number;
}

export const MeatProductionSchema = SchemaFactory.createForClass(MeatProduction)