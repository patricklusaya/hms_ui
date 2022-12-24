import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PublicComponent } from './public/public.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material-module';
import { PatientsComponent } from './patients/patients.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { NgChartsModule } from 'ng2-charts';
import { LabRequestsComponent } from './lab-requests/lab-requests.component';
import { PatientLabDetailsComponent } from './patient-lab-details/patient-lab-details.component';
import { PatientPhamDetailsComponent } from './patient-pham-details/patient-pham-details.component';
import { PhamRequestsComponent } from './pham-requests/pham-requests.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NavbarComponent,
    LoginComponent,
    BoardAdminComponent,
    PublicComponent,
    LandingPageComponent,
    ProfileComponent,
    NotFoundPageComponent,
    PatientsComponent,
    RegisterPatientComponent,
    PatientDetailsComponent,
    RegisterEmployeeComponent,
    LabRequestsComponent,
    PatientLabDetailsComponent,
    PatientPhamDetailsComponent,
    PhamRequestsComponent
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule,
    AppMaterialModule,
  
   
    
   
  ],
  providers:  [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
