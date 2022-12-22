import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';



import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    localStorage: any;






  constructor(private fb:FormBuilder,private cc:FormBuilder,
    private http : HttpClient,private router: Router ) {

     }
    private loginStatus=new BehaviorSubject<boolean>(this.checkLoginStatus());


   readonly BaseUrl= "http://localhost:63365/api";


  Id: any;
  arey: any;
login:any;




  formModel=this.fb.group({
    UserName:['',Validators.required],
    Email:['',[Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],

    Password:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*.*?[#?!@$%^&*-]).{8,}$")] ],
     Confirm_Password:['',Validators.required]


  });






   register(){
    var body={
      UserName:this.formModel.value.UserName,
      Email:this.formModel.value.Email,
      Password: this.formModel.value.Password,
      Confirm_Password: this.formModel.value.Password
    }
   return this.http.post(this.BaseUrl+'/Signup/Create',body,{
    responseType:'text',
   });
   }


    ContactModel=this.cc.group({
      Name:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      MobilePhone:['',[Validators.required,]],
      Message:['',Validators.required]
     });
     contactus(){
      var body={
        Name:this.ContactModel.value.Name,
        Email:this.ContactModel.value.Email,
        MobilePhone: this.ContactModel.value.MobilePhone,
        Message: this.ContactModel.value.Message
      }
     return this.http.post(this.BaseUrl+'/Contact/Feedback',body,{
      responseType:'text',
     });
     }
     feedback() {
      return this.http.get(this.BaseUrl+ "/Contact");
    }




    LoginModel=this.fb.group({
      UserName:['',Validators.required, ],
      Password:['',Validators.required,],

})
    Login(){

      var body={
        UserName:this.LoginModel.value.UserName,

        Password: this.LoginModel.value.Password,

      }

      // if(body.UserName=="Admin"&&body.Password=="Admin12345678"){
      //     this.router.navigateByUrl("/Admin");

      // }

       return this.http.post(this.BaseUrl+"/Login/Authenticate",body,{responseType:'text'})
    }
    setToken(token:string){
      localStorage.setItem("Acess_Token",token)

     }
     HaveAdminaccess(){
      var logintoken=localStorage.getItem("Acess_Token")||'';
      var _extractedtoken=logintoken.split('.')[1];
        var _atobdata=atob(_extractedtoken);
        var finaldata=JSON.parse(_atobdata);
        if (finaldata.role=="Admin"){
          return true;
        }
        this.router.navigateByUrl("/Sign-in")
        alert("Access Denied")
        return false;
     }
     HaveUseraccess(){
      var logintoken=localStorage.getItem("Acess_Token")||'';
      var _extractedtoken=logintoken.split('.')[1];
        var _atobdata=atob(_extractedtoken);
        var finaldata=JSON.parse(_atobdata);
        if (finaldata.role=="User"){
          return true;
        }
        this.router.navigateByUrl("/Sign-in")
        alert("Access Denied")

        return false;
     }
      get isLoggedin():boolean
      {
      return localStorage.getItem("Acess_Token")? true:false;


      this.loginStatus.next(true);
        localStorage.setItem('loginStatus','1');






    }



    checkLoginStatus():boolean
    {
      return false;

    }

    Logout(){
      localStorage.removeItem("Acess_Token");
      this.loginStatus.next(false);
      localStorage.setItem('loginStatus','0');

      this.router.navigate(['/']);



    }



    DeleteUsers(userid:String){
    return this.http.delete(this.BaseUrl+"/Signup/DeleteUser?id="+userid);
    }
    Deletefeedback(userid: string){
return this.http.delete(this.BaseUrl+"/Contact/DeleteFeedback?id="+userid);
    }



  }
