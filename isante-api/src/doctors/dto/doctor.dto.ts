import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Doctor DTO
 */

export class DoctorDto{

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

    @ApiProperty({ required: false, example: '...'})
    startDate: Date;

    @ApiProperty({ required: false, example: '...'})
    lastModificationDate: Date;

    @ApiProperty({ required: false, example: '...'})
    endDate: Date;
}