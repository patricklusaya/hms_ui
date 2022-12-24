import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-patient-pham-details',
  templateUrl: './patient-pham-details.component.html',
  styleUrls: ['./patient-pham-details.component.css']
})
export class PatientPhamDetailsComponent implements OnInit {
  data: any;
   results: any
  myResults: any;

  constructor( private userService: UserService , private _route: ActivatedRoute,
    private router: Router,) { }
  patientId:any = this._route.snapshot.paramMap.get('patientId');
  ngOnInit(): void {

    this.userService.getPrescriptionByPatientId(this.patientId).subscribe(
      data => {    
        this.data = data;  
        // this.form.patientTests = data.tests; 
        console.log(data);
      
      }
    )

  }
 
dispenseMeds(): void {
  const results = "Dispensed Meds"
  // this.userService.sendDispensation( this.patientId , results, ).subscribe(
  //   (    myResults: any) =>{
  //     this.myResults= myResults
  //   }
  // )

}

}
