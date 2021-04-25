import { Module } from '@nestjs/common';


@Module({
  imports: [
    //mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
  ],
})
export class AppModule {}
