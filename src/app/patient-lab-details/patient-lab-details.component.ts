import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LabDetails } from '../labdetails';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-patient-lab-details',
  templateUrl: './patient-lab-details.component.html',
  styleUrls: ['./patient-lab-details.component.css']
})
export class PatientLabDetailsComponent implements OnInit {
  signupForm = new FormGroup({
    results: new FormControl(''),
    
  });
  myTests:any


  errorMessage = "";
  isSuccessful= false;
  isSavingResultsFailed= false;
  data: any;
  dataSaved = false;
   
  constructor(private userService: UserService , private _route: ActivatedRoute,
    private router: Router,
    ) { }

  patientId:any = this._route.snapshot.paramMap.get('patientId');

   

  ngOnInit(): void {
    this.userService.getLabResultsByPatientId(this.patientId).subscribe(
      data => {    
        this.data = data;  
        // this.form.patientTests = data.tests; 
        console.log(data);
      
      }
    )
  }
 

  handleButtonClick(result: any) {
    console.log(result.tests);
   this.myTests = result.tests;
  }
  form : any = {
    results : null,
    patientId: this.patientId,
   myTests:null
   
    };
  
  onSubmit(): void {
    const { results, patientId  } = this.form;
    const id=this._route.snapshot.paramMap.get('patientId');
    const myTests = this.myTests
    this.userService.createResults(results,patientId,myTests).subscribe(
      data=>{
        console.log(data);
      
        this.isSuccessful = true;
        
        this.isSavingResultsFailed = false;
        this.router.navigate(['/lab-requests', id]).then(

          ()=> setTimeout(() => {
            window.location.reload()
            
          }, 600)
        );
        
          this.dataSaved = true;
      }
    )
       
  }

}
