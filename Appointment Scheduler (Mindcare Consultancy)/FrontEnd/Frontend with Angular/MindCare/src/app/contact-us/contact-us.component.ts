import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  alert:boolean=false;
  constructor(public service:UserService) { }

  ngOnInit(): void {
  }
  msg:any
  onsubmit(){
    this.service.contactus().subscribe(res=>{
       this.msg=res;
       console.log(this.msg)
       this.service.ContactModel.reset();
       this.alert=true;
      }

  )


   }
   closealert(){
    this.alert=false;
  }
}
