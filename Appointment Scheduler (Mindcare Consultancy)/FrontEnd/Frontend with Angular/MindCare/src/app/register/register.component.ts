import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean=false;

  msg:any

    constructor(public service:UserService,private formBuilder: FormBuilder,private router:Router) { }

    ngOnInit(): void {


    }



    closeAlert()
    {
  this.alert=false
  this.router.navigateByUrl('/Sign-in');

    }
    onsubmit(){
       this.service.register().subscribe(res=>{
       this.msg=res
      if(this.msg=="successfully registered"){
        this.alert=true;
        this.service.formModel.reset();
      }

        console.log(this.msg)





       }

   )

      }
    }





