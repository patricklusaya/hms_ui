import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthGuard } from './guard/auth.guard';

import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PatientsComponent } from './patients/patients.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicComponent } from './public/public.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';

const routes: Routes = [
  {path :'', component :LandingPageComponent},
  {path : 'login', component :LoginComponent},
  {path : 'admin', component :BoardAdminComponent},
  {path : 'public', component :PublicComponent},
  {path : 'home', component :HomeComponent, canActivate: [AuthGuard]},
  {path : 'profile', component :ProfileComponent, canActivate: [AuthGuard]},
  {path : 'patients', component :PatientsComponent, canActivate: [AuthGuard]},
  {path : 'register-patient', component :RegisterPatientComponent, canActivate: [AuthGuard]},
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
