import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { state } from '@angular/animations';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
loading= false;
alert: boolean=false
    LoginStatus$: any;

  constructor( public user: UserService,private fb:FormBuilder,public router:Router,private http:HttpClient) { }
msg:any


ngOnInit(): void{

this.user.localStorage.subscribe((state)=>{
  this.LoginStatus$.next(state.isloggesinStatus);
});
if(this.LoginStatus$.getvalue()){

this.router.navigate(['/']);

}

}
login(){
 // var logintoken=localStorage.getItem("Acess_Token")||'';
  //    var _extractedtoken=logintoken.split('.')[1];
  //    var _atobdata=atob(logintoken);
  //    var finaldata=JSON.parse(_atobdata);
   // console.log(logintoken);

  this.user.Login().subscribe((res)=>{
      console.log(res)
    var logintoken=res||'';
       var _extractedtoken=logintoken.split('.')[1];
        var _atobdata=atob(_extractedtoken);
        var finaldata=JSON.parse(_atobdata);
      console.log(finaldata);
      console.log(finaldata.role);
         if(res=="Either username or password is incorrect"){
           console.log(res)
           this.alert=true;
         }
       else if(finaldata.role=="Admin"){
        this.user.setToken(res);
          this.router.navigateByUrl("/Admin")
          .then(() => {
            window.location.reload();
          });
  //          this.router.navigate(["/Admin"])

         }

         else{
          this.user.setToken(res);

          this.router.navigateByUrl("/Appointment");
       this.router.navigate(["/Appointment"])
  .then(() => {
    window.location.reload();
  });
        }







    this.user.LoginModel.reset();

  })
     }
     closeAlert()
     {
   this.alert=false


     }
    

    }






