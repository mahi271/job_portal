import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobserviceService } from 'src/app/jobservice.service';
import { Job } from 'src/app/model/Job';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  id:number=0;
  jobs:Job=new Job();

  constructor(private route:ActivatedRoute,private router:Router,private service:JobserviceService){}
  ngOnInit(){

    this.jobs=new Job();
    this.id=this.route.snapshot.params['id'];
    this.service.getOneJob(this.id).subscribe((data)=>{
      console.log("got data");
      this.jobs=data;
    })
  }



}
