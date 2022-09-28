import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Doctor DTO
 */

export class DoctorDto {

    @ApiProperty({ required: false, example: 1})
    id: number;

    @ApiProperty({ required: true, example: '12345606969494' })
    @IsNotEmpty()
    num: string;

    @ApiProperty({ required: true, example: 'Docteur Milène Tan' })
    @IsNotEmpty()
    fullname: string;

    @ApiProperty({ required: true, example: '40 Rue Rieussec' })
    @IsNotEmpty()
    adress: string;

    @ApiProperty({ required: true, example: '78220' })
    @IsNotEmpty()
    zipcode: string;

    @ApiProperty({ required: true, example: 'Viroflay' })
    @IsNotEmpty()
    city: string;

    @ApiProperty({ required: true, example: 'France' })
    @IsNotEmpty()
    country: string;

    @ApiProperty({ required: true, example: '0768398488' })
    @IsNotEmpty()
    phone: string;

    @ApiProperty({ required: true, example: false })
    @IsNotEmpty()
    isPhoneVerified: boolean;

    @ApiProperty({ required: true, example: 'dr-milene@isante.com' })
    @IsNotEmpty()
    email: string;

    @ApiProperty({ required: true, example: false })
    @IsNotEmpty()
    isEmailVerified: boolean;

    @ApiProperty({ required: false, example: '...'})
    createdAt: Date;

    @ApiProperty({ required: false, example: '...'})
    updateAt: Date;

    @ApiProperty({ required: false, example: '...'})
    endDate: Date;

    @ApiProperty({ required: false, example: false})
    isDeleted: boolean;

    @ApiProperty({ required: false, example: '...'}) usefulInfo: string;

    @ApiProperty({ required: false, example: '...'}) introduction: string;

    @ApiProperty({ required: false, example: '...'}) languages: string;

    @ApiProperty({ required: false, example: '...'}) graduationDate: string;

    @ApiProperty({ required: false, example: '...'}) diplomaLibelle: string;

    @ApiProperty({ required: false, example: '...'}) trainings: string;

    @ApiProperty({ required: false, example: '...'}) experiences: string;

    @ApiProperty({ required: false, example: '...'}) profilPicture: string;

    @ApiProperty({ required: false, example: '...'}) cabinetPic1: string;

    @ApiProperty({ required: false, example: '...'}) cabinetPic2: string;

    @ApiProperty({ required: false, example: '...'}) cabinetPic3: string;

    @ApiProperty({ required: false, example: '...'}) 
    prices: string;

    @ApiProperty({ required: false, example: '...'}) timetable: string;

    @ApiProperty({ required: false, example: '...'}) emergencyContact: string;

    @ApiProperty({ required: false, example: '...'}) paymentMethods: string;

    @ApiProperty({ required: false, example: '...'}) specialty: string;

    @ApiProperty({ required: false, example: '...'}) expertise: string;

    @ApiProperty({ required: false, example: '...'}) refundsConvention: string;

    @ApiProperty({ required: false, example: '...'}) healthCardAccepted: boolean;

    @ApiProperty({ required: true, example: '...'}) password: string;

    @ApiProperty({ required: true, example: '...'}) confirmPassword: string; //not saved in DB
}