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
export class ListFilesService {

  constructor(private http: HttpClient) { }

  list_files(user_id): Observable<any> {
    let type = 'list_files';
    return this.http.post(AUTH_API + 'load', {
      user_id,
      type
    }, httpOptions);
  }

  open_file(user_id: string, file_name: string): Observable<any> {
    let type = 'open_file';
    return this.http.post(AUTH_API + 'load', {
      user_id,
      file_name,
      type
    }, httpOptions);
  }

}
