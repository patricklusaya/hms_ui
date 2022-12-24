import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LabRequest } from '../labrequest';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-lab-requests',
  templateUrl: './lab-requests.component.html',
  styleUrls: ['./lab-requests.component.css']
})
export class LabRequestsComponent implements OnInit {
  requests!: LabRequest[];
  
  // columns we will show on the table
  public displayedColumns = [   'patientId', 'tests', 'postedBy',   ];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<LabRequest>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor( private userService: UserService) { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  ngOnInit(): void {
    this.userService.getLabRequests().subscribe(
      
      requests =>{
        this.requests= requests;
        this.dataSource.data = requests;
        console.log(requests);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;
        
        
      }
    )
  }

}
