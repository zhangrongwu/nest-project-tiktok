import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    // 守卫   我们希望根据分配给当前用户的角色与正在处理的当前路由所需的实际角色之间的比较来设置返回值的条件
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.matchRoles(roles, user.roles);
  }
  matchRoles(roles: any, userRoles: string):boolean {
    return true
  }
}