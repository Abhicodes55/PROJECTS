import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-feedbacks',
  templateUrl: './user-feedbacks.component.html',
  styleUrls: ['./user-feedbacks.component.css']
})
export class UserFeedbacksComponent implements OnInit {
feedback: any;
  constructor(private service:UserService) {

    this.service.feedback().subscribe((data: any)=>{
      this.feedback=data;
      console.log(data);
    })
   }

  ngOnInit(): void {
  }
  Deletecontact(userid:string){
    if(confirm('Are you sure you want to delete?'))
    this.service.Deletefeedback(userid).subscribe(res=>
      {
        alert("Record deleted sucessfully")
      })
      location.reload();
    }


}
