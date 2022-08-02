import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { ManagementServicesService } from 'src/app/services/management-services.service';


@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})

export class DeptListComponent implements OnInit {

  departments : Department[]

  constructor(private service :ManagementServicesService,private route: Router) { }
  formModel : Department = new Department(0,"","");

  ngOnInit(): void {
    this.listOfDepartments()
  }

  

  listOfDepartments(){
    this.service.getAllDepartments().subscribe(data=>{
      console.log(data);
      this.departments=data;
    })
  }
  onSubmit(form:NgForm){
    this.departments.push(form.value);
    }

}
