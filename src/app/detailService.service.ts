import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {

constructor(private http:HttpClient) { }
getLoginDetails(){
  return this.http.get("http://localhost:3000/Register");
}
getServiceDetails(){
  return this.http.get("http://localhost:3000/serviceDetails");
}
}
