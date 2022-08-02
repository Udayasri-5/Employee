import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { Router,RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { DeptFormComponent } from './components/dept-form/dept-form.component';

const route : Routes = [
  {path:'',component:WelcomeComponent} , 
  {path : 'employees',component : EmpListComponent } , 
  {path : 'departments' , component : DeptListComponent},
  {path : 'empform' , component : EmpFormComponent},
  {path :'update/:empid',component:EmpFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DeptListComponent,
    WelcomeComponent,
    EmpFormComponent,
    DeptFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
