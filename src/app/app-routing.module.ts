import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { ApplicationComponent } from './components/application/application.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'navbar',
    component:NavbarComponent,
  },
  {
    path:'details/:id',
    component:DetailsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'job-list',
    component:JobListComponent
  },
  {
    path:'apply',
    component:ApplicationComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'post-job',
    component:PostJobComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
