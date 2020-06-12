import {
  Injectable,
  ExecutionContext,
  CanActivate,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

export const Roles = (...roles: string[]): any => SetMetadata('roles', roles);
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
      console.log('Auth guard Active');
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    let user = request.user;
    user = { roles: ['user'] };
    const hasRole = () => user.roles.some(role => roles.includes(role));
    return user && user.roles && hasRole();
  }
}
