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

    usefulInfo: { type: String },
    introduction: { type: String },
    languages: { type: String },
    graduationDate: { type: String },
    diplomaLibelle: { type: String },
    trainings: { type: String },//json Date+ Libelle
    experiences: { type: String },//json Date+ Libelle
    profilPicture: { type: String },
    cabinetPic1: { type: String },
    cabinetPic2: { type: String },
    cabinetPic3: { type: String },
    prices: { type: String },//json
    timetable: { type: String },//json
    emergencyContact: { type: String },
    paymentMethods: { type: String },
    specialty: { type: String },
    expertise: { type: String },//json
    refundsConvention: { type: String },//json
    healthCardAccepted: { type: Boolean },
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
    usefulInfo: string;//ex: RDC, accès handicapé
    introduction: string;
    languages: string;
    graduationDate: string;
    diplomaLibelle: string;
    trainings: string;
    experiences: string;
    profilPicture: string;
    cabinetPic1: string;
    cabinetPic2: string;
    cabinetPic3: string;
    prices: string;
    timetable: string;
    emergencyContact: string;
    paymentMethods: string;
    specialty: string;
    expertise: string;
    refundsConvention: string;
    healthCardAccepted: boolean;

}