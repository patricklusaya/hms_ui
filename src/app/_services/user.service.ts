import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../patient';



@Injectable({
  providedIn: 'root'
})
export class UserService {
   apiUrl: string = 'http://localhost:8080/api/test/'
  constructor(private http : HttpClient) { }
  registerPatient(patient :Patient) : Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(patient);
    console.log(body)
    return this.http.post(this.apiUrl + 'register-patient', body,{'headers':headers})
  }

  getPublicContent() : Observable<any>{
    return this.http.get(this.apiUrl + 'all', {responseType : 'text'})
  }
  getPatients() : Observable<Patient[]> {
    console.log('getPatients '+this.apiUrl + 'patients')
    return this.http.get<Patient[]>(this.apiUrl + 'patients')
  }

  // getPatients()  :Observable <any> {
  //   return this.http.get(apiUrl + 'patients', {responseType : 'text'})
  // }
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
