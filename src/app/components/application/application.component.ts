import { Component } from '@angular/core';
import { JobserviceService } from 'src/app/jobservice.service';
import { Application } from 'src/app/model/Application';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  submitted=false;
  application=new Application();
  constructor(private service:JobserviceService){}

  onsubmit(){
    console.log("onsubmit success");
    this.submitted=true;
    this.save();
  }
  save(){
    console.log("in save");
    this.service.addApplication(this.application).subscribe();
    
  }

}
