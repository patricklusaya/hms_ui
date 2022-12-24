import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Labtest } from '../labtest';
import { Patient } from '../patient';
import { Test } from '../test';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit, Test , Labtest{

  
 
  patient!: Patient;
  data: any;
  isPresSuccessful = false;
  isSuccessful = false;
  iscreateTestFailed = false;
  isPrescrptFailed = false;
  errorMessage = '';
  labTest:Labtest= new Labtest();
  results: any;
  response: any;

  constructor(private userService: UserService,
    private router: Router,
     private _route: ActivatedRoute) { 

     }
     myid:any = this._route.snapshot.paramMap.get('id');
     form : any = {
      tests : null,
      patientId: this.myid
      
      
      
      };

      preScriptionForm : any = {
        prescription:null ,
        patientId: this.myid
      }
     public Name: string = this.myid;
     public tests!: string;
     public patientId: string = this.myid;
     public prescription!: string;
  

  ngOnInit(): void {
  

   console.log(this.myid);
   
    this.userService.getPatientDetailsById(this.myid).subscribe(
      data =>{
        console.log(data);
        this.data= data;
        
      }

     
      ),
      this.userService.getLabResultsByPatientId(this.myid).subscribe(
        results =>{
          console.log(results);
          this.results = results
          
        }
      ),

      this.userService.getPrescriptionByPatientId(this.myid).subscribe(
        response =>{
          console.log(response);
          this.response = response;
          
        }
      );
    

  }

  onSubmit(): void {
    const { tests, patientId } = this.form;
    const id=this._route.snapshot.paramMap.get('id');
    this.userService.createTest(tests,patientId).subscribe(
      data=>{
        console.log(data);
        this.isSuccessful = true;
        this.iscreateTestFailed = false;
        this.router.navigate(['/patients', id]).then(

          ()=> setTimeout(() => {
            window.location.reload()
            
          }, 600)
        );
        
      }
    )

  }

  onPost(): void{
    console.log("hello world");
    
    const { prescription, patientId } = this.preScriptionForm;
    // console.log(this.preScriptionForm);
    
    const id=this._route.snapshot.paramMap.get('id');
    this.userService.createPrescription(prescription,patientId).subscribe(
      mydata=>{
        console.log(mydata);
        this.isPresSuccessful = true;
        this.isPrescrptFailed = false;
        this.router.navigate(['/patients', id]).then(

          ()=> setTimeout(() => {
            window.location.reload()
            
          }, 600)
        );
        
      }
    )
  }


}
