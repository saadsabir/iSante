import * as mongoose from 'mongoose';

export const DoctorsSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true,default: 1 },
    num: { type: String, require: true, unique: true },
    fullname: { type: String, require: true },
    adress: { type: String },
    zipcode: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    isPhoneVerified: { type: Boolean},
    email : { type: String, unique: true },
    isEmailVerified : { type: Boolean },
    createdAt: { type: Date },
    updateAt: { type: Date },
    endDate: { type: Date },
    isDeleted: { type: Boolean },
});

export interface Doctor extends mongoose.Document {
    id: number;
    num: string;
    fullname: string;
    adress: string;
    zipcode: string;
    city: string;
    country: string;
    phone: string;
    isPhoneVerified,
    email,
    isEmailVerified,
    createdAt: Date;
    updatedAt: Date;
    endDate: Date;
    isDeleted: boolean;
}