import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb;//localhost/isante_db_dev')],
})
export class DoctorsModule {}
