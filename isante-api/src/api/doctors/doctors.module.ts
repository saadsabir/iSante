import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { DoctorsSchema } from './doctors.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorsSchema }])],
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
