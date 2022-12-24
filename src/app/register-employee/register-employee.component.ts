import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { Employee } from '../employee';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})

export class RegisterEmployeeComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl(''),
    fullname: new FormControl(''),
    email: new FormControl(''),
    department: new FormControl(''),
    role: new FormControl([]),
  });

  

  errorMessage = "";
  isSuccessful= false;
  isRegistrationFailed= false;




  constructor(private userService: UserService ,  private router: Router,
    private authService: AuthService , private http: HttpClient
    
    ) { }
    
  ngOnInit(): void {
  
  }


  submit() {
    
 const formData = this.signupForm.value;
 const body = JSON.stringify(formData);
 console.log(body);


 

 
   

    const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(user);

    this.http.post('http://localhost:8090/api/auth/register-employee', body, {'headers':headers})
      .subscribe(response => {
        console.log(response);
        this.isSuccessful= true;
  this.isRegistrationFailed= false;
  this.router.navigate(['register-employee']).then(

    ()=> setTimeout(() => {
      window.location.reload()
      
    }, 500)
  );
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegistrationFailed = true;
      }
      
      
      );
  }
  

  // registerEmployee(){
  //   this.authService.registerEmployee(this.employee).subscribe(
  //     data =>{
  //       console.log(data);
  //       this.isSuccessful= true;
  // this.isRegistrationFailed= false;
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isRegistrationFailed = true;
  //     }
  //   )
  // }

}
