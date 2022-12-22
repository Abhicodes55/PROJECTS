import { Component,/*ViewEncapsulation*/} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event , ActivatedRoute} from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { filter } from 'rxjs/operators';
import { AppoinmentServiceService } from './shared/appoinment-service.service';
import { UserService } from './shared/user.service';
import { UserFeedbacksComponent } from './user-feedbacks/user-feedbacks.component';
import{FormControl,FormGroup}from'@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
/*encapsulation:ViewEncapsulation.None*/

})
export class AppComponent {

  title = 'MindCare';

  constructor(
    private router: Router,private activatedRoute: ActivatedRoute,private service:UserService


  ){}

  ngOnInit() {
   }

    }













