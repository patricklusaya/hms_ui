import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthGuard } from './guard/auth.guard';

import { HomeComponent } from './home/home.component';
import { LabRequestsComponent } from './lab-requests/lab-requests.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientLabDetailsComponent } from './patient-lab-details/patient-lab-details.component';
import { PatientPhamDetailsComponent } from './patient-pham-details/patient-pham-details.component';
import { PatientsComponent } from './patients/patients.component';
import { PhamRequestsComponent } from './pham-requests/pham-requests.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicComponent } from './public/public.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';

const routes: Routes = [
  {path :'', component :LandingPageComponent},
  {path : 'login', component :LoginComponent},
  {path : 'admin', component :BoardAdminComponent},
  {path : 'public', component :PublicComponent},
  {path : 'piechart', component :HomeComponent, canActivate: [AuthGuard]},
  {path : 'profile', component :ProfileComponent, canActivate: [AuthGuard]},
  {path : 'patients', component :PatientsComponent, canActivate: [AuthGuard]},
  {path : 'register-patient', component :RegisterPatientComponent, canActivate: [AuthGuard]},
  {path : 'register-employee', component :RegisterEmployeeComponent, canActivate: [AuthGuard]},
  {path : 'patients/:id', component :PatientDetailsComponent, canActivate: [AuthGuard]},
  {path : 'lab-requests/:patientId', component :PatientLabDetailsComponent, canActivate: [AuthGuard]},
  {path : 'lab-requests', component :LabRequestsComponent, canActivate: [AuthGuard]},
  {path : 'pham-requests/:patientId', component :PatientPhamDetailsComponent, canActivate: [AuthGuard]},
  {path : 'pham-requests', component :PhamRequestsComponent, canActivate: [AuthGuard]},
  {path: '404', component: NotFoundPageComponent},
   
 {path: '**', redirectTo: '/404'}
  // { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
