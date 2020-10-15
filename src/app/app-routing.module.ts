import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';

const routes: Routes = [
  {path:"employees" , component:EmployeeListComponent},
  {path:"create" , component:CreateEmployeeComponent},
  {path:"update/:id", component:UpdateEmployeeComponent},
  {path:"employeeview/:id", component:EmployeeDetailComponent},
  {path:"", redirectTo:"employees", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
