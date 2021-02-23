import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { IEmployee } from './employee'
//import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = 'http://localhost:3000/employee'

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);

  }
}
