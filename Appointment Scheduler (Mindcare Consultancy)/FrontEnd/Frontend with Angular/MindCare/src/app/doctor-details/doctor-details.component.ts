import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../shared/admin-service.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
    http: any;

  constructor(private service:AdminServiceService) { }

   body:any
  ngOnInit(): void {
  }
  viewDoctor(){
    this.service.Doctor().subscribe((data)=>{

      /*this.body=res;*/
      /*console.log(this.body);*/
       this.body=data;
       console.log(this.body);
 })


  }

updateDoctordata(id:number,data:any){
  return this.http.put('${this.url}/${id}',data);
}

  Deletedoctor(userid:string){
if(confirm('Are you sure you want to delete?'))
    this.service.Deletedoctor(userid).subscribe(res=>
    {
alert("Record deleted sucessfully")
      // this.modal.open(Component);
    } )
    location.reload();
  }
  // clickMethod(name: string) {
  //   if(confirm("Are you sure to delete "+name)) {
  //     console.log("Implement delete functionality here");
  //   }
  //}
//   mwlConfirmationPopover(popoverTitle:string){
//   this.service.popoverTitle;
// popoverMessage:string='Popover description';
// confirmClicked:boolean =false;
// cancelClicked:boolean = false;
//   }
}

