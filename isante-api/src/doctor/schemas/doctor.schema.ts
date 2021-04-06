import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
  @Prop()
  id: string;

  @Prop()
  fullname: number;

  @Prop()
  adress: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  description: string;
  
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);