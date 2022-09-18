import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://eatingtracker.herokuapp.com/api/v1/user/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})

};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  
  getPersonalData(): Observable<any> {
    return this.http.get(API_URL + 'personal-plan', { responseType: 'text' });
  }

  inputData(username: string, age: number, gender: string,initialWeight: number, initialHeight: number, target: string,activityFrequency: string): Observable<any> {
    return this.http.post(API_URL + 'personal-plan', {
      username,
      age,
      gender,
      activityFrequency,
      initialHeight,
      initialWeight,
      target
    }, httpOptions);
  }
}
