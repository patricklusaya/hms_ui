import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { TokenStorageService } from './token-storage.service';
import { Employee } from '../employee';

const AUTH_API = 'http://localhost:8090/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient , private tk: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
   isLoggedIn(){
    return !! this.tk.getToken();
   }
   registerEmployee(employee: Employee): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(employee);
    return this.http.post(AUTH_API + 'register-employee',body , {'headers':headers} )
  }

}
