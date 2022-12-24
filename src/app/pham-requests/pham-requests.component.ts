import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PhamRequest } from '../phamrequest';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-pham-requests',
  templateUrl: './pham-requests.component.html',
  styleUrls: ['./pham-requests.component.css']
})
export class PhamRequestsComponent implements OnInit {
  requests!: PhamRequest[];
  
  // columns we will show on the table
  public displayedColumns = [   'patientId', 'date', 'postedBy',   ];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<PhamRequest>();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  constructor( private userService: UserService) { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {

    this.userService.getPhamRequests().subscribe(
      
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
