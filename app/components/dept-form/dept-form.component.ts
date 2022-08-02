import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/common/department';
import { ManagementServicesService } from 'src/app/services/management-services.service';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent implements OnInit {
  departments : Department[];

  constructor(private service : ManagementServicesService) { }
  formModel : Department = new Department(0,"","");


  ngOnInit(): void {
    
  }

  onSubmit(form:NgForm){
    this.departments.push(form.value);
    }


}
