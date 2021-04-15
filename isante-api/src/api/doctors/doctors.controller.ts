import { Controller, Get, Post, HttpStatus,HttpException,UseGuards,Body,UseInterceptors,ClassSerializerInterceptor, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('doctors')
@Controller('api/doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  async addDoctor(
    @Body('id') id: number,
    @Body('num') num: string,
    @Body('fullname') fullname: string,
    @Body('adress') adress: string,
    @Body('zipcode') zipcode: string,
    @Body('city') city: string,
    @Body('country') country: string,
    @Body('phone') phone: string,
    @Body('email') email: string,
  ){
    const doctor = await this.doctorsService.insertDoctor(
      id,
      num,
      fullname,
      adress,
      zipcode,
      city,
      country,
      phone,
      email,
    );
    return {
      statusCode : HttpStatus.OK,
      message : 'Doctor added successfully'
    }
  }

  @Get()
  async getAllDoctors() {
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
