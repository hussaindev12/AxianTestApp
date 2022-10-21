import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  prefix = environment.config.backend_url;
  constructor(private http:HttpClient) { }
  getAuthToken():string {
    return localStorage.getItem('userToken');
    }
    login(obj:any){
      return this.http.post(this.prefix + 'Account',obj)
    }
}
