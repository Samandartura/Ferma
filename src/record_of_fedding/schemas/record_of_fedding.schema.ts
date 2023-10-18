import { Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Fedding } from "../../fedding/schemas/fedding.schema";


export type RecordOfFeddingDocument = HydratedDocument<RecordOfFedding>

export class RecordOfFedding {
  @Prop({required:true})
  date:Date;

  @Prop({})
  consumption:string;

  @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref:'Fedding'}]})
  fedding_id:Fedding[]
}

export const RecordOfFeddingSchema =SchemaFactory.createForClass(RecordOfFedding)
