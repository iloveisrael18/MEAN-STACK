import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee'
import { catchError, retry } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = 'http://localhost:3000/employee'

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse){
      return throwError(error.message);
  }

}
