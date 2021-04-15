import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorsController } from './api/doctors/doctors.controller';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ConfigurationService } from './configuration/configuration.service';

@Module({
  imports: [
    ConfigurationModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: async (configService: ConfigurationService) => ({
        type: configService.get('DB_TYPE'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        //username: configService.get('DB_USERNAME'),
        //password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: ['src/**/*.doctor.entity.ts'],
        synchronize: true,
      }) as any,
      inject: [ConfigurationService],
    }), AuthModule, ApiModule
  ],
  controllers: [AppController, DoctorsController],
  providers: [AppService],
})
export class AppModule {}
