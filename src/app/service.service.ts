import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor(private http:HttpClient) { }

postServiceDetails(body:any){
  return this.http.post("http://localhost:3000/serviceDetails",body)
}

}
