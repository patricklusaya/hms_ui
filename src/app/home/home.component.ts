import { LocationStrategy } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';





import { ChartData, ChartOptions } from 'chart.js';
import { ChartServiceService } from '../chart-service.service';
import { UserService } from '../_services/user.service';
import { HttpClient } from '@angular/common/http';
import { VisitTypeCount } from '../visitTypeCount';
import { ChartDataset } from 'chart.js';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

 
  // chartType = 'pie';
  // chartData!: any[];
  // chartOptions: any;
  pieChartData!: ChartData<ChartType, number[], string>;
  // pieChartData: number[] = [];
  pieChartLabels: string[] = [];


  constructor(private location : LocationStrategy ,
     private userService: UserService,
     private chartService: ChartServiceService, 
     private http : HttpClient
     
     ) { 
    
    history.pushState(null, "null", window.location.href); 
    this.location.onPopState(() => {
      history.pushState(null, "null", window.location.href);
    });
  }
//   ChartOptions = {
//     responsive: true
// }
//   ChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
//   ChartColor:any = [
//     {
//         backgroundColor: ['rgba(30, 169, 224, 0.8)',
//         'rgba(255,165,0,0.9)',
//         'rgba(139, 136, 136, 0.9)',
//         'rgba(255, 161, 181, 0.9)',
//         'rgba(255, 102, 0, 0.9)'
//         ]
//     }
// ]

  ngOnInit(): void {
    // this.http.get<VisitTypeCount[]>('http://localhost:8090/api/test/visit-types').subscribe(data => {

    
    // });


  //   this.http.get('http://localhost:8090/api/test/piechart')
  //   .subscribe(
  //     (data: any) => {
  //       this.chartData = data.map((item: { visitType: any; count: any; }) => {
  //         return {
  //           label: item.visitType,
  //           data: item.count
  //         };
  //       });
  //     }
  // );

  this.http.get<any>('http://localhost:8090/api/test/piechart').subscribe(data => {
    this.pieChartLabels = Object.keys(data);
    // this.pieChartData = Object.values(data);
    this.pieChartData = {
      labels: this.pieChartLabels,
      datasets: [
        {
          data: Object.values(data),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , 'grey'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , 'grey'],
        },
      ],
    };
  });

  }


  }



