import { HydratedDocument } from "mongoose";
import { Prop, Schema } from "@nestjs/mongoose";


export type BlockDocument = HydratedDocument<Block>;

@Schema()
export class Block {
  @Prop({required:true})
  number:number;

  @Prop({required:true})
  description:string
}


