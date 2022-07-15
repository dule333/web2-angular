import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from './shared/models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper : JwtHelperService, public router:Router) { }

  public isAuth(): boolean
  {
    const token = localStorage.getItem('token');
    if(token != null || token != '')
      return !this.jwtHelper.isTokenExpired(token!);
    return false;
  }
  decodeToken(token:string):Token {
    const decoded = this.jwtHelper.decodeToken(token);
    var role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    var id = decoded["id"];
    if(role =="admin"){
      return new Token(id, 1);
    }
    if(role =="customer"){
      return new Token(id, 0)
    }
    if(role =="postal"){
      return new Token(id, 2)
    }
    return new Token(0,-1)
  }
}
