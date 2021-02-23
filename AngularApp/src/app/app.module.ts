import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './components/EmployeeComponents/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/EmployeeComponents/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './components/EmployeeComponents/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './components/EmployeeComponents/delete-employee/delete-employee.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
