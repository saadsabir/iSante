import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: console, cors: true });
  app.useGlobalPipes(new ValidationPipe());

  // Enabling helmet to secure the app with headers
  app.use(helmet());

  // Swagger setup
  const options = new DocumentBuilder()
  .setTitle('ISANTE - API')
  .setDescription('isante Rest API with user management')
  .setVersion('1.0')
  .addTag('isante')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
