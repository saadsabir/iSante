import { Injectable,NotFoundException,Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { timeStamp } from 'node:console';
import { doc } from 'prettier';
import { zip } from 'rxjs';
import { Doctor } from './doctors.model';

@Injectable()
export class DoctorsService {
  constructor(@InjectModel('Doctor') private readonly doctorModel: Model<Doctor>){}

  async insertDoctor(id: number, num: string,fullname: string,adress: string,zipcode: string,city: string,country: string,phone: string,email: string){
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
    };
  }

  async updateDoctor(id: number, num: string,fullname: string,adress: string, zipcode: string, city: string, country: string, phone: string, email: string){
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
