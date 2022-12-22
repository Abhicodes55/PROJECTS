import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../shared/admin-service.service';
import { AppoinmentServiceService } from '../shared/appoinment-service.service';
import { Router } from "@angular/router";
import { UserService } from '../shared/user.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.css']
})
export class ConsultancyComponent implements OnInit {

  [x: string]: any;
  alert:boolean=false
  body: any;
user: any;
minDate = new Date();

  constructor(public service:AdminServiceService,public user1:UserService, public service1:AppoinmentServiceService,private router: Router) {
    ;

    this.service.Doctor().subscribe((data)=>{

      /*this.body=res;*/
      /*console.log(this.body);*/
       this.body=data;
       console.log(data);

     })

  }


  ngOnInit(): void {
   

  }
  BookAppoinments(){
    this.service1.BookAppoinment().subscribe(res=>{
      console.log("Success");
      this.service1.AppoinmentModel.reset();
      this.alert=true;
    })

  }

  closealert(){
    this.alert=false;
  }
Doctorlist(){


   }
   logout(){
    this.user1.Logout();
    this.router.navigateByUrl("Sign-in")
   }


}

