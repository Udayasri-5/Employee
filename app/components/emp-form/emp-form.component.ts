import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { Employee } from 'src/app/common/employee';
import { ManagementServicesService } from 'src/app/services/management-services.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  employee: Employee = new Employee(0,"","","",0,0,0,0)
  departments : Department[]
  isEditable : boolean = false;

  constructor(private service : ManagementServicesService,private route:Router,private activateRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.listOfDepartments()
    this.activateRoute.paramMap.subscribe(()=>{this.getEmployeeByID()})
  }

  getEmployeeByID(){
    const empID = +this.activateRoute.snapshot.paramMap.get("empid");
    console.log(empID)
    if(empID > 0){
        this.isEditable = true
        this.service.getEmployeeById(empID).subscribe((data=>{
          this.employee = data;
        }))
    }
  }

  listOfDepartments(){
    this.service.getAllDepartments().subscribe(data=>{
      console.log(data);
      this.departments=data;
    })
  }

  goBack(){
    this.route.navigateByUrl("/employees")
  }

   onSubmit(form:NgForm){

    if(this.isEditable){
      this.service.updateEmployee(this.employee).subscribe(()=>{
        this.route.navigateByUrl("/employees")
      })
    }else{
      this.service.saveEmployee(this.employee).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("/employees");
        });
  }
}
}