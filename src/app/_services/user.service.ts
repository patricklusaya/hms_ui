import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { LabRequest } from '../labrequest';
import { LabResult } from '../labresults';
import { Labtest } from '../labtest';
import { Patient } from '../patient';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';
import { PhamRequest } from '../phamrequest';



@Injectable({
  providedIn: 'root'
})
export class UserService  {
   apiUrl: string = 'http://localhost:8090/api/test/'
  constructor(private http : HttpClient) { 

  }

  registerPatient(patient :Patient) : Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(patient);
    console.log(body)
    return this.http.post(this.apiUrl + 'register-patient', body,{'headers':headers})
  }

  createTest(tests:string, patientId: string):Observable <any>{
    const headers = { 'content-type': 'application/json'}  
 
    return this.http.post(this.apiUrl + 'lab-request',{tests,patientId},{'headers':headers} )

  }

createPrescription( prescription : string, patientId: string){
  const headers = { 'content-type': 'application/json'}  
 
  return this.http.post(this.apiUrl + 'create-prescription',{prescription,patientId},{'headers':headers} )
}

  createResults(results: string, patientId:string,myTests: string): Observable<any>{
    const putUrl = `http://localhost:8090/api/test/create-results/${patientId}/${myTests}`;
    const headers = { 'content-type': 'application/json'}  
    return this.http.put(putUrl ,{results},{'headers':headers} )

  }

  // sendDispensation( results: any , patientId:string,myPrescription: string): Observable<any>{
  //   const putUrl = `http://localhost:8090/api/test/create-results/${patientId}/${myTests}`;
  //   const headers = { 'content-type': 'application/json'}  
  //   return this.http.put(putUrl ,{results},{'headers':headers} )
  // }
 
  getLabRequests():Observable<LabRequest[]>{
    return this.http.get<LabRequest[]>(this.apiUrl + 'lab-requests');

  }
  getPhamRequests():Observable<PhamRequest[]>{
    return this.http.get<PhamRequest[]>(this.apiUrl + 'pham-requests');

  }
  getPatientDetailsById(id: any):Observable<any>{
 
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    
    })
    };
    
    
    return this.http.get(this.apiUrl+'patients/' + id , httpOptions  )
  }

  getLabResultsByPatientId(patientId: any):Observable<any>{
 
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    
    })
    };
    
    
    return this.http.get(this.apiUrl+'lab-results/' + patientId , httpOptions  )
  }

  getPrescriptionByPatientId(patientId: any):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    
    })
    };
    
    
    return this.http.get(this.apiUrl+'pres-results/' + patientId , httpOptions  )


  }

  getPublicContent() : Observable<any>{
    return this.http.get(this.apiUrl + 'all', {responseType : 'text'})
  }
  getPatients() : Observable<Patient[]> {
    console.log('getPatients '+this.apiUrl + 'patients')
    return this.http.get<Patient[]>(this.apiUrl + 'patients')
  }

  getLabResults(): Observable < LabResult[]>{
    return this.http .get <LabResult[]>(this.apiUrl + 'lab-results');
  }

  
  getReceptionistContent()  :Observable <any> {
    return this.http.get(this.apiUrl+ 'receptionist', {responseType :'text'})
  }
  getLabContent()  :Observable <any> {
    return this.http.get(this.apiUrl + 'lab', {responseType :'text'})
  }
  getAdminContent()  :Observable <any> {
    return this.http.get(this.apiUrl + 'patients', {responseType :'text'})
  }
}
