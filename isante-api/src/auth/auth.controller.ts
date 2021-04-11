import { Controller, Post, Body, HttpException, HttpStatus, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {}
