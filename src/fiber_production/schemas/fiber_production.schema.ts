import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, mongo } from "mongoose";


export type FiberProductionDocument =HydratedDocument<FiberProduction>

@Schema({versionKey:false})
export class FiberProduction {
  @Prop({required:true})
  fiber_yield:number

  @Prop({required:true})
  shearing_schedule:number;

  @Prop({required:true})
  fiber_quantity:number;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Animal'})
  animal_id:number
}

export const FiberProductionSchema = SchemaFactory.createForClass(FiberProduction)