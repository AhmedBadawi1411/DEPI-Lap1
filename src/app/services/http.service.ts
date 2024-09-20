import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getUser(email:string): Observable<any> {
    console.log(email + 'from service');
    return this.http.get(`https://retoolapi.dev/tiRDAE/data?email=${email}`);
  }
}
