import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { JobserviceService } from 'src/app/jobservice.service';
import { Job } from 'src/app/model/Job';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit{
  jobs:Observable<Job[]>=of([]);
  constructor(private service:JobserviceService,private router:Router){}
  
  ngOnInit() {
     this.getAllJob();
  }
  getAllJob(){
     this.jobs=this.service.getAllJob();
  }
  jobDetails(id:number){
    console.log("job in");
    this.router.navigate(['details',id]);
  }
  

}
