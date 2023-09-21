import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobserviceService } from 'src/app/jobservice.service';
import { JobSeeker } from 'src/app/model/Jobseeker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  submitted=false;
  jobseeker:JobSeeker=new JobSeeker();
  msg='';
  constructor(private service:JobserviceService,private router:Router){}

  ngOnInit(){
  }
  onSubmit(){
    this.service.loginuser(this.jobseeker).subscribe(data=>{
      console.log("Response received");
      this.router.navigate(['/home'])
      alert("Login Successful");
    },error=>{
      console.log("exception occured");
      this.msg="Bad credentials,please enter valid data"
      alert("Login failed")
    });
  }
//   gotoSignUp(){
//     this.router.navigate(['/signUp']);
//   }


}
