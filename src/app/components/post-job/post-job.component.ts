import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from 'src/app/jobservice.service';
import { Job } from 'src/app/model/Job';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent {
  submitted=false;
  job=new Job();
  constructor(private service:JobserviceService,private router:Router){}
  onsubmit(){
    this.submitted=true;
    this.save();

  }
  save(){
    this.service.addJob(this.job).subscribe();
    this.goToList();

  }
  goToList(){
    this.router.navigate(['job-list']);
  }

}
