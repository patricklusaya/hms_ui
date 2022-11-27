import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Patient } from '../patient';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {
  billCategory!: string;
  billCats = [
    {id: 1, name: "Cash"},
    {id: 2, name: "Insurance"}

 ];


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
patient = new Patient();

 
  constructor(private userService : UserService, private router: Router
    ) { }

  ngOnInit(): void {
  }
  registerPatient(){

      this.userService.registerPatient(this.patient).subscribe(
        data => {
        console.log(data)
        this.patient.fullname = '';
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['register-patient']).then(

          ()=> setTimeout(() => {
            window.location.reload()
            
          }, 500)
        );
        
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
      
      )  
    }

  

  
}
