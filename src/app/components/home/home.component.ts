import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  testimonials = [
    {
      quote: 'Got my dream job all thanks to JobEntry platform',
      imageSrc: '../assets/images/testimonial-1.jpg',
      clientName: 'Ana',
      profession: 'Software developer'
    },
    {
      quote: 'JobEntry app provided me a job with good salary in an well developed organization',
      imageSrc: '../assets/images/testimonial-2.jpg',
      clientName: 'Akhil',
      profession: 'Software Tester'
    },
    {
      quote: 'This platform is wonderful,its easy to handle also provides an opportunity to show your skills',
      imageSrc: '../assets/images/testimonial-3.jpg',
      clientName: 'Mahesh',
      profession: 'Data Analyst'
    },
    {
      quote: 'this app makes it easy to apply or post a job one should suerly try to upgrade his carrier using this platform',
      imageSrc: '../assets/images/testimonial-4.jpg',
      clientName: 'Lisa',
      profession: 'Tech support'
    },
    // Add more testimonials as needed
  ];
  

}
