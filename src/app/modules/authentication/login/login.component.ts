import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: FormGroup;
  loading = false;
  submitted = false;
 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  get f() { return this.form.controls; }
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    this.submitted = true;

  // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    

    let obj = {
      email: this.f['username'].value,
      password: this.f['password'].value
    }


    this.authService.login(obj)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data)
          let credentials:any = data;
          localStorage.setItem('email',credentials.email)
          localStorage.setItem('type',credentials.type)
          localStorage.setItem('userToken',credentials.userToken)
          this.router.navigate(['/employee/list']);
        },
        error => {
          this.loading = false;
        });
  }

}
