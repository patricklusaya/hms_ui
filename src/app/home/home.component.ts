import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  constructor(private location : LocationStrategy , private userService: UserService) { 
    history.pushState(null, "null", window.location.href); 
    this.location.onPopState(() => {
      history.pushState(null, "null", window.location.href);
    });
  }

  ngOnInit(): void {
    this.userService.getAdminContent().subscribe(
      data =>{
        this.content = data;
      } , 
      err => {
        this.content = JSON.parse(err.error).message;
      }
    )
  }

}
