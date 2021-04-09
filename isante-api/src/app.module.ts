import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorsController } from './doctors/doctors.controller';
import { DoctorsModule } from './doctors/doctors.module';
import { DoctorsService } from './doctors/doctors.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), DoctorsModule],
  controllers: [AppController, DoctorsController],
  providers: [AppService],
})
export class AppModule {}
