import { ValidateNested } from 'class-validator';
import { RoleDto } from '../../roles/role.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UsersRolesDto {

    @ApiProperty({ required: true, type: [RoleDto] })
    @ValidateNested()
    @Type(() => RoleDto)
    roles: RoleDto[];
}
