import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form : any = {
username : null,
password: null

};
isLoggedIn = false;
isLoginFailed =  false;
errorMessage = '';
roles : string [] =  [ ];

  constructor(private authService: AuthService ,
     private tokenStorage: TokenStorageService , private router: Router, 
      private location: LocationStrategy) {
        history.pushState(null, "null", window.location.href); 
      this.location.onPopState(() => {
        history.pushState(null, "null", window.location.href);
      });
       }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/home']).then(()=> window.location.reload());
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage() {
 
    window.location.reload();
  }

}