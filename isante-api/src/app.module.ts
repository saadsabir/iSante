import { Module } from '@nestjs/common';
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
      useFactory: async (ConfigService: ConfigurationService) => ({
        type: ConfigService.get('DB_TYPE'),
        host: ConfigService.get('DB_HOST'),
        port: ConfigService.get('DB_PORT'),
        database: ConfigService.get('DB_NAME'),
        synchronize: true,
      }) as any,
      inject: [ConfigurationService],
    }),AuthModule, ApiModule
  ],
})
export class AppModule {}