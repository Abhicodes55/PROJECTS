import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ServicesComponent } from './services/services.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { UserService } from './shared/user.service';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { ScheduledAppoinmentsComponent } from './scheduled-appoinments/scheduled-appoinments.component';
import { UserFeedbacksComponent } from './user-feedbacks/user-feedbacks.component';

import{UpdateAppointComponent} from'./update-appoint/update-appoint.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';


import { AdminServiceService } from './shared/admin-service.service';
import { AppoinmentServiceService } from './shared/appoinment-service.service';
import{ConfirmationPopoverModule}from 'angular-confirmation-popover';
import { EditdoctorComponent } from './editdoctor/editdoctor.component';
import { AddDrComponent } from './add-dr/add-dr.component';
import { TokenInterceptorService } from './shared/token-interceptor.service';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,


     HomeComponent,
     ContactUsComponent,
     SignInComponent,
     ServicesComponent,

     RegisterComponent,
      AdminComponent,
      ConsultancyComponent,
      RegisteredUsersComponent,
      ScheduledAppoinmentsComponent,
      UserFeedbacksComponent,
      UpdateAppointComponent,
      DoctorDetailsComponent,
      EditdoctorComponent,
      AddDrComponent,











  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

// ConfirmationPopoverModule.forRoot({
//   confirmButtonType:'danger'
// }),


  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}, UserService, AdminServiceService, AppoinmentServiceService],
  //injecting Service in App Module so that it can be used by all the components in this app
  bootstrap: [AppComponent]
})
export class AppModule { }
