import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class InitialAuthGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.userService.isLoading.next(true);

    const activeToken = localStorage.getItem('token');

    if (activeToken) {
      this.userService.getInitialUser();
    }

    this.userService.isLoading.next(false);
    return true;
  }
}
