import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from 'src/app/jobservice.service';
import { JobSeeker } from 'src/app/model/Jobseeker';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  jobseeker=new JobSeeker();
  constructor(private service:JobserviceService,private router:Router){}
  onsubmit(){
    this.save();
    // this.router.navigate(['/login']);
  }
  save(){
  
    this.service.addJobseeker(this.jobseeker).subscribe();
    this.router.navigate(['/login']);

  }

}
