import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../patient';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patient: Patient[] = [];

  // columns we will show on the table
  public displayedColumns = [   'id', 'fullname', 'age',  'visitType'  ];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<Patient>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private userService:UserService) { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  ngOnInit(): void {
   this.getPatients();
   this.dataSource.paginator=this.paginator;
   this.dataSource.sort = this.sort;
  }
 
  getPatients() {
    this.userService.getPatients()
    .subscribe((res)=>{
      console.log(res);
      this.dataSource.data = res;
    })

  
  }
  

}
