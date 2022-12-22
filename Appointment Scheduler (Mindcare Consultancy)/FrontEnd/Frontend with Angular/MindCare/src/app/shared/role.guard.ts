import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private user:UserService){}

  canActivate(){
  if(this.user.HaveAdminaccess()){
    return true;
  }
  else{
    return false;
  }
  }


}
