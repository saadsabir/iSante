import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

/**
 * UserRegistrationDto
 */
export class UserRegistrationDto {

    @ApiProperty({ required: true, example: 'user@user.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ required: true, example: 'user_password' })
    @IsNotEmpty()
    @MinLength(4, { message: 'password must a least contains 4 characters' })
    password: string;

    @ApiProperty({ required: true, example: 'user_password' })
    @IsNotEmpty()
    @MinLength(4, { message: 'password must a least contains 4 characters' })
    confirmPassword: string;
}
