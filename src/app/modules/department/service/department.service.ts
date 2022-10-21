import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  prefix = environment.config.backend_url;
  constructor(private http:HttpClient) { }

  getDepartments(){
    return this.http.get(this.prefix + 'Department')
  }
  getDepartment(id:number){
    return this.http.get(this.prefix + 'Department'+ id)
  }
  addEmployee(obj:any){
    return this.http.post(this.prefix + 'Department',obj)
  }
  editDepartment(obj:any,id:number){
    return this.http.put(this.prefix + 'Department' + id,obj)
  }
  deleteDepartment(id:number){
    return this.http.delete(this.prefix + 'Department'+ id)
  }
}
