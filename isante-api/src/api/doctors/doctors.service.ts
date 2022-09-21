import { Injectable,NotFoundException,Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';
import { DoctorDto } from './doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DoctorsService {
  constructor(@InjectRepository(Doctor) private readonly doctorRepository: Repository<Doctor>){}

  async insertDoctor(doctor : Doctor): Promise<Doctor> {
    try{
      return await this.doctorRepository.save(doctor);
    }catch (error){
      Logger.error(error);
      return null;
    }
  }

  async getDoctors(): Promise<Doctor> {
    try{
      return await this.doctorRepository.findOneOrFail();
    }
    catch(error){
      Logger.error(error);
      return null;
    }
  }

  async getSingleDoctor(id: number): Promise<Doctor> {
    try{
      return await this.doctorRepository.findOneOrFail({ where: {id: id}});
    }
    catch(error){
      Logger.error(error);
      return null;
    }
  }

  async updateDoctor(id: number, num: string,fullname: string,adress: string, zipcode: string, city: string, country: string, phone: string, email: string, usefulInfo: string, introduction: string, languages: string, graduationDate: string, diplomaLibelle: string, trainings: string, experiences: string, profilPicture: string, cabinetPic1: string, cabinetPic2: string,cabinetPic3: string, prices: string, timetable: string, emergencyContact: string, paymentMethods: string, specialty: string, expertise: string, refundsConvention: string, healthCardAccepted: boolean): Promise<Doctor> {
    var updateDoctor = null;
    try{
      updateDoctor = await this.doctorRepository.
      findOneOrFail({where : {id: id}});
    }
    catch(error){
      Logger.error(error);
      updateDoctor = null;
      return null;
    }

    if(updateDoctor !== null){
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
    }
    updateDoctor.save(num,fullname,adress,zipcode,city,country,phone,email,usefulInfo,introduction,languages,graduationDate, diplomaLibelle, trainings,experiences, profilPicture, cabinetPic1, cabinetPic2,cabinetPic3, prices, timetable, emergencyContact,paymentMethods, specialty, expertise, refundsConvention,healthCardAccepted);
    
    return updateDoctor;
  }
  
  async deleteDoctor(id: number) : Promise<Doctor> {
    var updateDoctor = null;
    try{
      updateDoctor = await this.doctorRepository.
      findOneOrFail({where : {id: id}});
    }
    catch(error){
      Logger.error(error);
      updateDoctor = null;
      return null;
    }
    if(updateDoctor !== null){
      if(updateDoctor.isDeleted === false && updateDoctor.
        endDate === null){
          updateDoctor.isDeleted = true;
          updateDoctor.endDate = new Date();
          updateDoctor.save();
          return updateDoctor;
        }
        else{
          throw new NotFoundException('Doctor already deleted.');
        }
    }
  }
}
