
import { SetMetadata } from '@nestjs/common';
import { RoleCode } from '../../api/roles/role.enum';

export const Roles = (...roleCodes: RoleCode[]) => SetMetadata('roleCodes', roleCodes);
