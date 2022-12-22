import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { UserFeedbacksComponent } from './user-feedbacks/user-feedbacks.component';
import { ScheduledAppoinmentsComponent } from './scheduled-appoinments/scheduled-appoinments.component';
import { UpdateAppointComponent } from './update-appoint/update-appoint.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';


import { AuthGuard } from './shared/auth.guard';
import { EditdoctorComponent } from './editdoctor/editdoctor.component';
import { AddDrComponent } from './add-dr/add-dr.component';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent

  },
  {
    path:"Appointment",
    component:ConsultancyComponent,
    canActivate:[AuthGuard]

  },
  {
    path:"Admin/doctordetails/editdoctor",
    component:EditdoctorComponent,
    canActivate:[RoleGuard]

  },
  {
    path:"Admin/doctordetails/AddDr",
    component:AddDrComponent,
    canActivate:[RoleGuard]

  },
  {
    path:"Admin/registeredusers",
    component:RegisteredUsersComponent,
    canActivate:[RoleGuard]

  },
  {
    path:"Admin/scheduleappoinments",
    component:ScheduledAppoinmentsComponent,
    canActivate:[RoleGuard]

  },
  {
    path:"Admin/usersfeedback",
    component:UserFeedbacksComponent,
    canActivate:[RoleGuard]

  },

  {
    path:"ContactUs",
    component:ContactUsComponent

  },
  {
    path:"Sign-in",
    component:SignInComponent

  },


  {
    path:"Services",
    component:ServicesComponent

  },
  {
    path:"Sign-in/Registration",
    component:RegisterComponent

  },
  {
    path:"Sign-in/Registration",
    component:RegisterComponent

  },
  {
    path:"Our-Story",
    component:AboutComponent
  },

  {
    path:"Admin",
    component:AdminComponent,
    canActivate:[RoleGuard]
  },
  {
    path:"Admin/scheduleappoinments/updateappoint/:id",
    component:UpdateAppointComponent,
    canActivate:[RoleGuard]
  },
  {
    path:"Admin/doctordetails",
    component:DoctorDetailsComponent,
    canActivate:[RoleGuard]
  },
    {
   path:"Admin/doctordetails/editdoctor/:id",
     component:EditdoctorComponent,
   canActivate:[RoleGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
