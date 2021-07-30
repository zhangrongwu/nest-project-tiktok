import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
// 路由守卫 
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return  this.validateRequest(request);
  }
  validateRequest(request): boolean {
    // 校验路由 ！！！！！！！！！！！！！！！！！！！！！！！！ 判断是否有token进行守卫
    return true;
  }
}