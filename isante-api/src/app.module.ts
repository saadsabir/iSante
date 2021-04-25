import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ConfigurationService } from './configuration/configuration.service';


@Module({
  imports: [
    ConfigurationModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: async (ConfigService: ConfigurationService) => ({
        type: ConfigService.get('DB_TYPE'),
        host: ConfigService.get('DB_HOST'),
        port: ConfigService.get('DB_PORT'),
        database: ConfigService.get('DB_NAME'),
        synchronize: true,
      }) as any,
      inject: [ConfigurationService],
    }),ApiModule
  ],
})
export class AppModule {}
//mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb