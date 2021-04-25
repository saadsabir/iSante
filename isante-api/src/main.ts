import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
require('dotenv').config({path: `../${process.env.NODE_ENV}.env`});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //require('dotenv').config({path: `../${process.env.NODE_ENV}.env`});
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
