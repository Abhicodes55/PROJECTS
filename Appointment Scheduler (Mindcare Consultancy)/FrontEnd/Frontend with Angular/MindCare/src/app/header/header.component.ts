import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {BehaviorSubject, Observable} from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedIn:any;
isAdmin=false;
route:string;

  LoginStatus$ =new BehaviorSubject <boolean>(null);
  constructor(private use:UserService, private router : Router) {
    router.events.subscribe(val => {

      if (this.route==='/home'||this.route==='/Contact'||this.route==='/Book an Appointment'){
   this.isAdmin=true;
   }
   else{
   this.isAdmin=false;
   }
   })
   }







  ngOnInit():void
  {

    this.use.localStorage.subscribe((state)=>{
      this.LoginStatus$.next(state.isLoggesinStatus);

  })};


onLogout()
{
  this.use.Logout();

}


}
