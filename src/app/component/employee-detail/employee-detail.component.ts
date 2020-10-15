import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/share/employee';
import { EmployeeService } from 'src/app/share/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
employee:Employee= new Employee()
  constructor(private route : ActivatedRoute, private service:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeDetails()
  }
getEmployeeDetails(){
  const id = this.route.snapshot.params['id']
 this.service.getEmployee(id).subscribe((res:any)=>{
   this.employee = res;
 })
}
}
