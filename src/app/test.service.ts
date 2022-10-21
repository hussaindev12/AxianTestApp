import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  getDep(){
    return this.http.get('https://localhost:44381/Api/Department')
  }
}
