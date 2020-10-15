import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/share/employee';
import { EmployeeService } from 'src/app/share/employee.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 form:FormGroup;
 employees:Employee = new Employee()
  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    // this.form = this.fb.group({
    //  firstname : [''],
    //  lastname: [''],
    //  email:['']
    // })
  }

  addSubmit(){
    this.service.saveEmployees(this.employees).subscribe((res:any)=>{
         this.router.navigate(['/employees'])
    })
    

  }
}
