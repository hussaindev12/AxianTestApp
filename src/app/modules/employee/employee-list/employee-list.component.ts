import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { EmployeeModle } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList:any;
  employeeForm:FormGroup;
  submitted = false;
  employee= new EmployeeModle();
  edit = false;
  constructor(private employeeService: EmployeeService,private formBuilder: FormBuilder,) { }
  get f() { return this.employeeForm.controls; }
  ngOnInit(): void {
    this.getEmployees();

    this.employeeForm = this.formBuilder.group({
      id: [this.employee.id],
      fullName: [this.employee.fullName, Validators.required],
      email: [this.employee.email, Validators.required],
      dob: [this.employee.dob, Validators.required],
      salary: [this.employee.salary, Validators.required],
      leavPeryear: [this.employee.leavPeryear, Validators.required],
      sickLeave: [this.employee.sickLeave, Validators.required],
      address: [this.employee.address, Validators.required],
      depId: [this.employee.depId]
    });
    
   
  }
  
  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
 

  onSubmit(){
     if(this.edit){
      this.editEmployee();
     }else{
      this.addEmployee();
     }
      
  }


  getEmployees(){
    this.employeeService.getEmployees().subscribe(res => {
      console.log(res)
      this.employeeList = res;
    });
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(res => {
      this.getEmployees();
    });
  }

  getEmployee(id:number){ 
    this.edit = true; 
    this.employeeService.getEmployee(id).subscribe(res => {
      let formData : any = res;
      this.employeeForm.setValue({
        id:formData.id,
        fullName: formData.fullName,
        email:formData.email,
        dob: formData.dob,
        salary: formData.salary,
        leavPeryear: formData.leavPeryear,
        sickLeave: formData.sickLeave,
        address:formData.address,
        depId: 1
     });
    
    });
    this.displayStyle = "block";
  }

  editEmployee(){
    this.employeeService.editEmployee(this.employeeForm.value,this.employeeForm.controls['id'].value).subscribe(res => {
      this.getEmployees();
    });
  }

  addEmployee(){
    this.submitted = true;        
     let formData:any = this.employeeForm.value;
    let obj = {
     
    fullName: formData.fullName,
      email: formData.email,
      password: "12345",
       dob: formData.dob,
      salary: formData.salary,
      leavPeryear: formData.leavPeryear,
      sickLeave: formData.sickLeave,
      address: formData.address,
       depId: 1
      
    }
       
    this.employeeService.addEmployee(obj).subscribe(res=>{
      this.getEmployees();
       this.displayStyle = "none";
       this.employeeForm.reset();
      });
  }
}
