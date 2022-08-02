import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { ManagementServicesService } from 'src/app/services/management-services.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
 

  employees : Employee[]
  searchByName : string
 
  constructor(private service : ManagementServicesService,private route:Router,private activeRoute:ActivatedRoute) { }
  formModel : Employee = new Employee(0,"","","",0,0,0,0);
  


  ngOnInit(): void {
    this.listOfEmployees()
    this.activeRoute.paramMap.subscribe(() =>{
      this.listOfEmployees()});
  }
  

   listOfEmployees(){
    this.service.getAllEmployees().subscribe(data=>{
      console.log(data); 
      this.employees = data;
    })
   }

   updateEmp(empNo:number){
    this.route.navigateByUrl("/update/"+empNo)
   }

   getEmployeeByName(){
      this.service.getEmployeeByName(this.searchByName).subscribe(data =>{
        this.employees = data
      })
   }
   deleteEmp(empNo:number){
    if(confirm("Do you want to delete")){
      this.service.deleteEmployee(empNo).subscribe(data => {
        console.log(data)
        this.listOfEmployees();
       // this.route.navigateByUrl("/employees")
      });
    }
   }

  

    backtoHome(){
      this.route.navigateByUrl("/")
    }

    

}
