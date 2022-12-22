import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../shared/admin-service.service'
import {ActivatedRoute,Params,Router} from'@angular/router';
import {FormsModule, FormBuilder , FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {
public id: any;
public data:any;
body:any;
dataa:any;

DoctorsModel=this.ud.group({
  name:[''],
  Specialization:[''],
  About: [''],
  availability: ['']
  })
constructor(public service: AdminServiceService, private route: ActivatedRoute,private ud: FormBuilder,private router: Router) {

}

Doctorobj:any={

};
 message:boolean=false;
 ngOnInit(): void{

this.id=this.route.snapshot.params.id
   //this.getData();

this.service.getDoctorById(this.route.snapshot.params.id).subscribe((result:any)=>{
console.log(result);
this.Doctorobj=result;
//   this.DoctorsModel=new FormGroup({
//   name: new FormControl(result['name']),
//  Specialization:new FormControl(result['specialization']),
//   About: new FormControl(result['about']),
//   availability:new FormControl(result['availability'])
 //this.DoctorsModel.patchValue({name:result.name,Specialization:result.specialization,About:result.about,availability:result.availability})


})















// updatedata(){
// return this.service.updatedr(this.id).subscribe((data:any)=>{
// this.service.DoctorsModel.reset();
//  this.router.navigate(['/doctordetails']);
// })
// }
// }




 }
    Postdata(){
     console.log(this.Doctorobj[0])
     this.service.updatedr(this.Doctorobj[0].id,this.Doctorobj[0]).subscribe((res=>{
      console.log(res)
     }))
    }


}


