import { Injectable,NotFoundException,Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { timeStamp } from 'node:console';
import { Doctor } from './doctors.model';

@Injectable()
export class DoctorsService {
  constructor(@InjectModel('Doctor') private readonly doctorModel: Model<Doctor>){}

  async insertDoctor(id: number, num: string,fullname: string,adress: string,zipcode: string,city: string,country: string,phone: string,email: string, usefulInfo: string, introduction: string, languages: string, graduationDate: string, diplomaLibelle: string, trainings: string, experiences: string, profilPicture: string, cabinetPic1: string, cabinetPic2: string,cabinetPic3: string, prices: string, timetable: string, emergencyContact: string, paymentMethods: string, specialty: string, expertise: string, refundsConvention: string, healthCardAccepted: boolean){
    const newDoctor = new this.doctorModel({
      id,
      num,
      fullname,
      adress,
      zipcode,
      city,
      country,
      phone,
      isPhoneVerified : false,//by default false
      email,
      isEmailVerified : false,//by default false
      createdAt: timeStamp,
      updatedAt: null,
      endDate: null,
      isDeleted: false,//by default false
      usefulInfo,
      introduction,
      languages,
      graduationDate,
      diplomaLibelle,
      trainings,
      experiences,
      profilPicture,
      cabinetPic1,
      cabinetPic2,
      cabinetPic3,
      prices,
      timetable,
      emergencyContact,
      paymentMethods,
      specialty,
      expertise,
      refundsConvention,
      healthCardAccepted,
    });
    const result = await newDoctor.save();
    return result;
  }

  async getDoctors(){
    const doctors = await this.doctorModel.find().exec();
    return doctors.map(doctor => ({
      id: doctor.id,
      num: doctor.num,
      fullname: doctor.fullname,
      adress: doctor.adress,
      zipcode: doctor.zipcode,
      city: doctor.city,
      country: doctor.country,
      phone: doctor.phone,
      isPhoneVerified: doctor.isPhoneVerified,
      email: doctor.email,
      isEmailVerified: doctor.isEmailVerified,
      createdAt: doctor.createdAt,
      updatedAt: doctor.updatedAt,
      endDate: doctor.endDate,
      isDeleted: doctor.isDeleted,
    }));
  }

  async getSingleDoctor(id: number) {
    const doctor = await this.findDoctor(id);
    return {
      id: doctor.id,
      num: doctor.num,
      fullname: doctor.fullname,
      adress: doctor.adress,
      zipcode: doctor.zipcode,
      city: doctor.city,
      country: doctor.country,
      phone: doctor.phone,
      isPhoneVerified: doctor.isPhoneVerified,
      email: doctor.email,
      isEmailVerified: doctor.isEmailVerified,
      createdAt: doctor.createdAt,
      updatedAt: doctor.updatedAt,
      endDate: doctor.endDate,
      isDeleted: doctor.isDeleted,
      usefulInfo: doctor.usefulInfo,
      introduction: doctor.introduction,
      languages: doctor.languages,
      graduationDate: doctor.graduationDate,
      diplomaLibelle: doctor.diplomaLibelle,
      trainings: doctor.trainings,
      experiences: doctor.experiences,
      profilPicture: doctor.profilPicture,
      cabinetPic1: doctor.cabinetPic1,
      cabinetPic2: doctor.cabinetPic2,
      cabinetPic3: doctor.cabinetPic3,
      prices: doctor.prices,
      timetable: doctor.timetable,
      emergencyContact: doctor.emergencyContact,
      paymentMethods: doctor.paymentMethods,
      specialty: doctor.specialty,
      expertise: doctor.expertise,
      refundsConvention: doctor.refundsConvention,
      healthCardAccepted: doctor.healthCardAccepted,
    };
  }

  async updateDoctor(id: number, num: string,fullname: string,adress: string, zipcode: string, city: string, country: string, phone: string, email: string, usefulInfo: string, introduction: string, languages: string, graduationDate: string, diplomaLibelle: string, trainings: string, experiences: string, profilPicture: string, cabinetPic1: string, cabinetPic2: string,cabinetPic3: string, prices: string, timetable: string, emergencyContact: string, paymentMethods: string, specialty: string, expertise: string, refundsConvention: string, healthCardAccepted: boolean){
      const updateDoctor = await this.findDoctor(id);
      if(num) {
        updateDoctor.num = num;
      }
      if(fullname) {
        updateDoctor.fullname = fullname;
      }
      if(adress) {
        updateDoctor.adress = adress;
      }
      if(zipcode) {
        updateDoctor.zipcode = zipcode;
      }
      if(city) {
        updateDoctor.city = city;
      }
      if(country) {
        updateDoctor.country = country;
      }
      if(phone) {
        updateDoctor.phone = phone;
        updateDoctor.isPhoneVerified = false;
      }
      if(email){
        updateDoctor.email = email;
        updateDoctor.isEmailVerified = false;
      }
      updateDoctor.updatedAt = new Date();

      if(usefulInfo){
        updateDoctor.usefulInfo = usefulInfo;
      }
      if(introduction){
        updateDoctor.introduction = introduction;
      }
      if(languages){
        updateDoctor.languages = languages;
      }
      if(graduationDate){
        updateDoctor.graduationDate = graduationDate;
      }
      if(diplomaLibelle){
        updateDoctor.diplomaLibelle = diplomaLibelle;
      }
      if(trainings){
        updateDoctor.trainings = trainings;
      }
      if(experiences){
        updateDoctor.experiences = experiences;
      }
      if(profilPicture){
        updateDoctor.profilPicture = profilPicture;
      }
      if(cabinetPic1){
        updateDoctor.cabinetPic1 = cabinetPic1;
      }
      if(cabinetPic2){
        updateDoctor.cabinetPic2 = cabinetPic2;
      }
      if(cabinetPic3){
        updateDoctor.cabinetPic3 = cabinetPic3;
      }
      if(prices){
        updateDoctor.prices = prices;
      }
      if(timetable){
        updateDoctor.timetable = timetable;
      }
      if(emergencyContact){
        updateDoctor.emergencyContact = emergencyContact;
      }
      if(paymentMethods){
        updateDoctor.paymentMethods = paymentMethods;
      }
      if(specialty){
        updateDoctor.specialty = specialty;
      }
      if(expertise){
        updateDoctor.expertise = expertise;
      }
      if(refundsConvention){
        updateDoctor.refundsConvention = refundsConvention;
      }
      if(healthCardAccepted){
        updateDoctor.healthCardAccepted = healthCardAccepted;
      }

      updateDoctor.save();
      return updateDoctor;
  }
  
  async deleteDoctor(id: number){
    const updateDoctor = await this.findDoctor(id);
    if(updateDoctor.isDeleted === false && updateDoctor.endDate === null){
      updateDoctor.isDeleted = true;
      updateDoctor.endDate = new Date();
      updateDoctor.save();
      return true;
    }
    else{
      throw new NotFoundException('Doctor already deleted.');
    }
  }

  private async findDoctor(id: number): Promise<Doctor> {
    let doctor;
    try {
      doctor = await (await this.doctorModel.findById(id)).execPopulate();
    }catch (error) {
      throw new NotFoundException('Could not find doctor.');
    }
    if(!doctor) {
      throw new NotFoundException('Could not find doctor.');
    }
    return doctor;
  }

}
