import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './modules/employee/service/employee.service';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent implements OnInit {
  title = 'AxianTestApp';
  /**
   *
   */
  constructor() { }
  ngOnInit(): void {

    
    

  }
}
