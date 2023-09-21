import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  baseUrl="http://localhost:8084";
  constructor(private http:HttpClient) { }

  getAllJob():any{
    return this.http.get(`${this.baseUrl}/job/getAllJob`)
  }

  addApplication(application:Object){
    return this.http.post(`${this.baseUrl}/job/saveApplication`,application);
  }
  getOneJob(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/job/getJob/${id}`);
  }
  addJobseeker(jobseeker:Object){
    return this.http.post(`${this.baseUrl}/job/saveJobseeker`,jobseeker);
  }
  loginuser(jobseeker:Object):Observable<object>{
    return this.http.post(`${this.baseUrl}/job/loginUser`,jobseeker);
  }
  addJob(job:Object){
    return this.http.post(`${this.baseUrl}/job/saveJob`,job);
  }

  getOneJobseeker(username:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/job/getJobseekerusername/${username}`);

  }

}
