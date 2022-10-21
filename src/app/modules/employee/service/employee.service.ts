import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  prefix = environment.config.backend_url;
  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get(this.prefix + 'Employee')
  }
  getEmployee(id:number){
    return this.http.get(this.prefix + 'Employee/'+ id)
  }
  addEmployee(obj:any){
    return this.http.post(this.prefix + 'Employee',obj)
  }
  editEmployee(obj:any,id:number){
    return this.http.put(this.prefix + 'Employee' + id,obj)
  }
  deleteEmployee(id:number){
    
    return this.http.delete(this.prefix + 'Employee/'+ id)
  }

}
