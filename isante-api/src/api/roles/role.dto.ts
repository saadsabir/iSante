import { RoleCode } from './role.enum';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {

    @ApiProperty({ required: false, example: 1 })
    id: number;

    @ApiProperty({ required: true, enum: ['Admin', 'User','Doctor'] })
    @IsNotEmpty()
    code: RoleCode;
}
