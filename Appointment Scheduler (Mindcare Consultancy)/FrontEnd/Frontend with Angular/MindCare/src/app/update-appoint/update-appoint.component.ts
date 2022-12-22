import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminServiceService } from '../shared/admin-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-update-appoint',
  templateUrl: './update-appoint.component.html',
  styleUrls: ['./update-appoint.component.css']
})
export class UpdateAppointComponent implements OnInit {

  constructor(public service:AdminServiceService,public  ap:FormBuilder ,public router:Router, public route:ActivatedRoute) { }

  ngOnInit(): void {

  }

 //@ViewChild('pform') Form :ngForm;

  updateappoint(){
    this.service.UpdateAppoint().subscribe((res=>{
      console.log(res);
      this.service.UpdateAppointModel.reset();

    }))
    this.router.navigateByUrl("Admin/scheduleappoinments")
  }

}
