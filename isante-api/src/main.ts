import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
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
