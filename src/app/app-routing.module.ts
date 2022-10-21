import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';
import { EmployeeModule } from './modules/employee/employee.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent   
  },
  { path: 'employee',loadChildren: () => import('./modules/employee/employee.module').then(m =>  m.EmployeeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
