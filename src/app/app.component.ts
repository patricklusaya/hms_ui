import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './_services/auth.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  currentUser: any;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;


  constructor(private tokenStorageService: TokenStorageService ,
    private authService: AuthService,private router : Router ,  private location: LocationStrategy)
     { history.pushState(null, "null", window.location.href); 
      this.location.onPopState(() => {
        history.pushState(null, "null", window.location.href);
      });   }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
 
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      
      
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
  
    this.router.navigate(['/login']).then(()=> window.location.reload());
   
  }
}
