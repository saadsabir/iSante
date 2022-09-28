import { Controller, Get, Post, HttpStatus,HttpException,UseGuards,Body,UseInterceptors,ClassSerializerInterceptor, Patch, Param, Delete, ParseIntPipe, Req } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { Doctor } from './entities/doctor.entity';
import { DoctorDto } from './dtos/doctor.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Doc } from 'prettier';
import { request } from 'express';

@ApiBearerAuth()
@ApiTags('doctors')
@Controller('api/doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post('addDoctor')
  //@UseGuards(RolesGuard)
  //@Roles(RoleCode.USER, RoleCode.ADMIN)
  //@UseInterceptors(ClassSerializerInterceptor)
  async addDoctor(@Body() DoctorDto: DoctorDto ):Promise<Doctor> {
    if(DoctorDto.password != DoctorDto.confirmPassword){
      throw new HttpException('passwords do not match',HttpStatus.BAD_REQUEST);
    }
    const doctorSaved = await this.doctorsService.insertDoctor(DoctorDto);
    if(!doctorSaved){
      throw new HttpException(`error while registering user[Email=${DoctorDto.email}]`,HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return this.doctorsService.insertDoctor(DoctorDto);
  }

  @Get()
  async getAllDoctors():Promise<Doctor> {
    const doctors = await this.doctorsService.getDoctors();
    return doctors;
  }

  @Get(':id')
  getDoctor(@Param('id') id: number){
    return this.doctorsService.getSingleDoctor(id);
  }

  @Patch(':id')
  async updateDoctor(
    @Param('id') id: number,
    @Body('num') num: string,
    @Body('fullname') fullname: string,
    @Body('adress') adress: string,
    @Body('zipcode') zipcode: string,
    @Body('city') city: string,
    @Body('country') country: string,
    @Body('phone') phone: string,
    @Body('email') email: string,
    @Body('usefulInfo') usefulInfo: string,
    @Body('introduction') introduction: string,
    @Body('languages') languages: string,
    @Body('graduationDate') graduationDate: string,
    @Body('diplomaLibelle') diplomaLibelle: string,
    @Body('trainings') trainings: string,
    @Body('experiences') experiences: string,
    @Body('profilPicture') profilPicture: string,
    @Body('cabinetPic1') cabinetPic1: string,
    @Body('cabinetPic2') cabinetPic2: string,
    @Body('cabinetPic3') cabinetPic3: string,
    @Body('prices') prices: string,
    @Body('timetable') timetable: string,
    @Body('emergencyContact') emergencyContact: string,
    @Body('paymentMethods') paymentMethods: string,
    @Body('specialty') specialty: string,
    @Body('expertise') expertise: string,
    @Body('refundsConvention') refundsConvention: string,
    @Body('healthCardAccepted') healthCardAccepted: boolean,
  ){
    const doctor = await this.doctorsService.
    updateDoctor(
      id,
      num,
      fullname,
      adress,
      zipcode,
      city,
      country,
      phone,
      email,
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
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Doctor updated successfully',
      doctor: doctor,
    };
  }

  @Delete(':id')
  async removeDoctor(@Param('id') id: number){
    const isDeleted = await this.doctorsService.deleteDoctor(id);
    if(isDeleted){
      return {
        statusCode: HttpStatus.OK,
        message: 'doctor deleted successfully',
      };
    }
  }
}
