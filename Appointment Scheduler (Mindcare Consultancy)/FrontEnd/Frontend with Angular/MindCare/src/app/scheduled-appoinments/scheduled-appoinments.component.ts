import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { AppoinmentServiceService } from '../shared/appoinment-service.service';
import { UserService } from '../shared/user.service';
import { UpdateAppointComponent } from '../update-appoint/update-appoint.component';

@Component({
  selector: 'app-scheduled-appoinments',
  templateUrl: './scheduled-appoinments.component.html',
  styleUrls: ['./scheduled-appoinments.component.css']
})
export class ScheduledAppoinmentsComponent implements OnInit {
  title="api call";

body:any;
    LoginStatus$: any;
    user: any;
    router: any;

constructor(public userData:AppoinmentServiceService)


{
    this.userData.appoint().subscribe((data)=>{

     /*this.body=res;*/
     /*console.log(this.body);*/
      this.body=data;
      console.log(data);

    })


   }

  ngOnInit(): void {
    this.user.localStorage.subscribe((state)=>{
      this.LoginStatus$.next(state.isloggesinStatus);
    });
    if(this.LoginStatus$.getvalue()){

    this.router.navigate(['/']);

    }


  }
  Deleteappointment(userid:string){
    if(confirm('Are you sure you want to delete?'))
    this.userData.DeleteAppoint(userid).subscribe(res=>
      {
        alert("Record deleted sucessfully")
      })
      location.reload();
    }


    OnEditClick(id: any){
let currentp= this.body.find((p: any)=> { return p.id === id})
console.log(currentp);
}

  }



