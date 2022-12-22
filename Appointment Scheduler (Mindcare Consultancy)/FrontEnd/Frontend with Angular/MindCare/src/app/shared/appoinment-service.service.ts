import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppoinmentServiceService {
    loginStatus: any;

  constructor(private dd:FormBuilder,private http : HttpClient, private router: Router) { }
  readonly BaseUrl="http://localhost:63365/api"
  Id: any;


  AppoinmentModel=this.dd.group({
    Name:['',Validators.required],
    Email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    ContactNumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|10)?[0-9]{10}$") ]],
    AppointmentFor:['',Validators.required],
    AppointmentDescription:['',Validators.required],
    Date:['',Validators.required],
    Time: ['',Validators.required],
    HowLong:['']

   });
   setToken(token:string){
    localStorage.setItem("Acess_Token",token)
   }
    get isLoggedin():boolean
    {
    return localStorage.getItem("Acess_Token")? true:false;

    this.loginStatus.next(true);
      localStorage.setItem('loginStatus','1');}

   BookAppoinment(){
    var body={
      Name:this.AppoinmentModel.value.Name,
      Email:this.AppoinmentModel.value.Email,
    ContactNumber: this.AppoinmentModel.value.ContactNumber,
      AppointmentFor: this.AppoinmentModel.value.AppointmentFor,
      AppointmentDescription: this.AppoinmentModel.value.AppointmentDescription,
      Date: this.AppoinmentModel.value.Date,
      Time: this.AppoinmentModel.value.Time,
      HowLong:this.AppoinmentModel.value.HowLong
    }
   return this.http.post(this.BaseUrl+'/Appoinment/Appoinment',body,{
    responseType:'text',
   });
   }

    appoint(){
    return this.http.get(this.BaseUrl+"/Appoinment")
   }
   DeleteAppoint(userid: string){
    return this.http.delete(this.BaseUrl+"/Appoinment?id="+userid);
        }


}
