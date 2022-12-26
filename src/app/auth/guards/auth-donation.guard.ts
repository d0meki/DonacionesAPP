import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDonationGuard implements CanActivate, CanLoad {
  constructor(private authService : AuthService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isLogged() && this.authService.user_type === "donador"){
        return true;
      }
      this.router.navigate(['auth/login']);
      return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > | Promise<boolean > | boolean {
      if(this.authService.isLogged() && this.authService.user_type === "donador"){
        return true;
      }
      this.router.navigate(['auth/login']);
      return false;
  }
}
