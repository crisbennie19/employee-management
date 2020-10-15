import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 base:string = "http://localhost:8080/api/"

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>{
   return this.http.get<Employee[]>(this.base+`employees`)
  }
  saveEmployees(emp:Employee):Observable<Object>{
    return this.http.post(this.base+`save`,emp)
  }
  getEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>(this.base+`employee/${id}`)
  }
  updateEmployee(id:number, emp:Employee):Observable<Object>{
    return this.http.put<Employee>(this.base + `employee/${id}`, emp);
  }
  deleteEmployee(id:number):Observable<Object>{
    return this.http.delete(this.base+`employee/${id}`)
  }
 
}
