import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://eatingtracker.herokuapp.com/api/v1/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  register(email: string, password: string, passwordConfirm: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email,
      password,
      passwordConfirm
    }, httpOptions);
  }
}
