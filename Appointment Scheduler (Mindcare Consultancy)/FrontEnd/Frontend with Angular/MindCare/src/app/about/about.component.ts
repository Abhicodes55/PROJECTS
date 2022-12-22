import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { AdminServiceService } from '../shared/admin-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
body:any;
  constructor(private service:AdminServiceService, private route: Router) {
    this.service.Doctor().subscribe((data)=>{

      /*this.body=res;*/
      /*console.log(this.body);*/
       this.body=data;
       console.log(data);

     })

  }

  ngOnInit(): void {
  }

}
