import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop({required:true})
  full_name:string;

  @Prop({required:true})
  email:string;

  @Prop()
  phone_number:string;

  @Prop()
  tg_link:string;

  @Prop({required:true})
  hashed_password:string;

  @Prop()
  hashed_token:string;

  @Prop({default:true})
  is_active:boolean;

  @Prop({default:false})
  is_owner:boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin)
