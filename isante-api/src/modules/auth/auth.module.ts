import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        PassportModule,
        UsersModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: process.env.JWT_EXPIRATION_DELAY },
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
    ],
    controllers: [AuthController],
})
export class AuthModule { }
