import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate
{
    loginStatus: any;
  constructor(private service:UserService){

  }

  canActivate(){
    if(this.service.HaveUseraccess()){
      return true;
    }
    else{
      return false;
    }
    }
  setToken(token:string){
    localStorage.setItem("Acess_Token",token)
   }
    get isLoggedin():boolean
    {
    return localStorage.getItem("Acess_Token")? true:false;

    this.loginStatus.next(true);
      localStorage.setItem('loginStatus','1');
    }

}
