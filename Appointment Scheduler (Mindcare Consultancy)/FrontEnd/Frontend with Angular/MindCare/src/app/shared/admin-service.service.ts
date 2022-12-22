import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule, FormControl} from '@angular/forms';
import {HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
    localStorage: any;

  constructor(private ee:FormBuilder,public ud: FormBuilder,private http : HttpClient,private router: Router,) { }

  readonly BaseUrl="http://localhost:63365/api";
  Id: any;
  arey: any;

  UpdateAppointModel=this.ee.group({
    ID:[''],
    Name:[''],
    Email:[''],
    ContactNumber:[''],
    AppointmentFor:[''],
    AppointmentDescription:[''],
    Date:[''],
    Time:[''] ,
    HowLong:['']

   });
  UpdateAppoint(){

    //console.log(userid,username,useremail,usercontactNumber,userappointmentFor,userappointmentDescription,userdate,usertime,howLong)

     const id=this.UpdateAppointModel.value.ID;

    var arey={

      //ID:this.UpdateAppointModel.value.ID,
      Name : this.UpdateAppointModel.value.Name,
      Email : this.UpdateAppointModel.value.Email,
      ContactNumber : this.UpdateAppointModel.value.ContactNumber,
      AppointmentFor : this.UpdateAppointModel.value.AppointmentFor,
      AppointmentDescription: this.UpdateAppointModel.value.AppointmentDescription,
     Date : this.UpdateAppointModel.value.Date,
     Time : this.UpdateAppointModel.value.Time,
    HowLong : this.UpdateAppointModel.value.HowLong
     }

     console.log(id,arey)
     return this.http.put(this.BaseUrl+"/Appoinment/UpdateAppoint?id="+id,arey);

        }

        editdoctor= new FormGroup({
          name:new FormControl(''),
          Specialization:new FormControl(''),
          about:new FormControl(''),
        availability: new FormControl(''),
         });


DoctorsModel=this.ud.group({

name:[''],
Specialization:[''],
About: [''],
availability: ['']
})
Doctors(){
  let Token= localStorage.getItem("Acess_Token");
  console.warn(Token);
  let head_obj=new HttpHeaders().set("Authorization","Bearer "+Token)
var body={

name:this.DoctorsModel.value.name,
specialization:this.DoctorsModel.value.Specialization,
about:this.DoctorsModel.value.About,
availability:this.DoctorsModel.value.availability
}
return this.http.post(this.BaseUrl+"/Doctor/Doctor",body,{headers:head_obj});
}

      Deletedoctor(userid:string){
          return this.http.delete(this.BaseUrl+"/Doctor/Delete?id="+userid);
        }
        Doctor(){
          return this.http.get(this.BaseUrl+"/Doctor")
         }
        // add datapass through params

// update(data:any,id:number){
// return this.http.put<any>("/Doctor/Edit?id="+id,data)
// .pipe(Map((res:any)=>{
//   return res;
// }))
// }

         Users(){
          return this.http.get(this.BaseUrl+"/Signup")
         }
         getDoctorById(id:number){
          return this.http.get(this.BaseUrl+"/Doctor/Edit?id="+id);
         }
      updatedr( id:number,body){
        // var body={

        //   name:this.DoctorsModel.value.name,
        //   specialization:this.DoctorsModel.value.Specialization,
        //   about:this.DoctorsModel.value.About,
        //   availability:this.DoctorsModel.value.availability
        //   }

return this.http.put<any>(this.BaseUrl+"/Doctor/UpdateDoctor?id="+id,body)
.pipe(map((res: any)=>{''
return res;
}))

      }}



