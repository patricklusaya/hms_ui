import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private location : LocationStrategy)
   {
    history.pushState(null, "null", window.location.href); 
    this.location.onPopState(() => {
      history.pushState(null, "null", window.location.href);
    });
    }

  ngOnInit(): void {
  }

}
