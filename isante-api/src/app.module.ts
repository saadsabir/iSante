import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from './doctor/doctor.module';
import { DoctorController } from './doctor/doctor.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), DoctorModule],
  controllers: [AppController, DoctorController],
  providers: [AppService],
})
export class AppModule {}
