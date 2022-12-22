import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent
{
UserService: any;
 LoginStatus$: any;

constructor( private userData:UserService,private router:Router)
{


}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.userData.localStorage.subscribe((state)=>{
    this.LoginStatus$.next(state.isloggesinStatus);


  });

  if(this.LoginStatus$.getvalue()){



  this.router.navigate(['/Appointment']);



}
}
  logout()
  {
    this.userData.Logout();
    this.router.navigateByUrl("/Sign-in");
  }
}








