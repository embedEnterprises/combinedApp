import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'https://8lfrlhnvcd.execute-api.us-east-1.amazonaws.com/test/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let type = 'login';
    return this.http.post(AUTH_API + 'signup', {
      username,
      password,
      type
    }, httpOptions);
  }

  register(username: string, password: string): Observable<any> {
    let type = 'register';
    return this.http.post(AUTH_API + 'signup', {
      username,
      password,
      type
    }, httpOptions);
  }

  verify_mobile(username: string, otp: string): Observable<any> {
    let type = 'verify_mobile'
    return this.http.post(AUTH_API + 'signup', {
      username,
      otp,
      type
    }, httpOptions);
  }

}
