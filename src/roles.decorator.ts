import { SetMetadata } from '@nestjs/common';
// 角色 装饰器
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
