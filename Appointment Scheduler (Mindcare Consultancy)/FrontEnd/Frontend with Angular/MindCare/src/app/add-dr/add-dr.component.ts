import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../shared/admin-service.service';
import{ActivatedRoute}from'@angular/router';
import {FormsModule, FormBuilder , FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-dr',
  templateUrl: './add-dr.component.html',
  styleUrls: ['./add-dr.component.css']
})
export class AddDrComponent implements OnInit {
  LoginStatus$: any;
  router: any;

  constructor(public service: AdminServiceService,private Activatedroute:ActivatedRoute, private ud:FormBuilder,private rf:ReactiveFormsModule) { }

  ngOnInit(): void {
    this.service.localStorage.subscribe((state)=>{
      this.LoginStatus$.next(state.isloggesinStatus);
    });
    if(this.LoginStatus$.getvalue()){
    this.router.navigate(['/Appointment']);
    }

  }
  AddDoctor(){
    this.service.Doctors().subscribe((res)=>{
    console.log(res)
    this.service.DoctorsModel.reset();
    })
  }

}
