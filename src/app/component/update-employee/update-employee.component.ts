import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/share/employee';
import { EmployeeService } from 'src/app/share/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
employees: Employee = new Employee();
id:number
  constructor(private service: EmployeeService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.update()
  }
  update(){
this.id = this.route.snapshot.params['id'];
this.service.getEmployee(this.id).subscribe((res)=>{
 this.employees = res
})
  }
  updateEmployee(){
    this.service.updateEmployee(this.id, this.employees).subscribe((res:any)=>{
      this.router.navigate(['/employees'])
    })
  }

}
