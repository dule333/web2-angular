import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private auth: AuthService, private jwtHelper: JwtHelperService) {
  }
  canLoad(){
    console.log("CAN LOAD")
    if (this.auth.isAuth()){
      const token = localStorage.getItem("token");
      if (token && !this.jwtHelper.isTokenExpired(token)){
      }
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.auth.isAuth()){
   
      const token = localStorage.getItem("token");
      if (token && !this.jwtHelper.isTokenExpired(token)){
      
      }
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }

  }
  
}
