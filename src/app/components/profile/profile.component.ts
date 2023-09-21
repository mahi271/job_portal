import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobserviceService } from 'src/app/jobservice.service';
import { JobSeeker } from 'src/app/model/Jobseeker';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  username:string="";
  jobseeker=new JobSeeker();
  constructor(private service:JobserviceService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(){
    this.jobseeker=new JobSeeker();

    this.username=this.route.snapshot.params['username'];
    this.service.getOneJobseeker(this.username).subscribe((data)=>{
      console.log("got data");
      this.jobseeker=data;
      console.log(" data display");

    })
  }

}
