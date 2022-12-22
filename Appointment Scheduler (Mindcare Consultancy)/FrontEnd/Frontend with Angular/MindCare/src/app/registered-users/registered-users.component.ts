import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { AdminServiceService } from '../shared/admin-service.service';
@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent {
title="api call";

users:any;
constructor(private service:AdminServiceService,private router:Router,private service1:UserService)


{
    this.service.Users().subscribe((data)=>{


      this.users=data;
      console.log(data);

    })
}

Deleteuser(userid:string){
  if(confirm('Are you sure you want to delete?'))
this.service1.DeleteUsers(userid).subscribe(res=>
  {
    alert("Record deleted sucessfully")
  })
  location.reload();
}

}




