import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onsubmit(){
    console.log("onsubmit success");
    alert("your response has been submitted sucessfully our team will contact you shortly");
  }

}
