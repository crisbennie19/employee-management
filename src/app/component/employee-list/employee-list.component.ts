import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/share/employee';
import { EmployeeService } from 'src/app/share/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 employees:Employee[]
 msg:any
  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees()
  }
getEmployees(){
  this.service.getEmployees().subscribe((res:any)=>{
    this.employees = res
  })
}
viewEmployee(id:number){
  this.router.navigate(['/employeeview',id])
}
updateLink(id:number){
this.router.navigate(['/update', id]);
}
deleteEmployee(id:number){
  this.service.deleteEmployee(id).subscribe((res:any)=>{
    
    this.msg = res.success;
    this.getEmployees() 
  })
}
}
