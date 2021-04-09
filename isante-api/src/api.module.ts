import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';

/*
    To import all Modules
*/

@Module({
    imports: [DoctorsModule],
})
export class ApiModule {
}